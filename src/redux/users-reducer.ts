import {ActionsType, AppStateType, AppThunkType} from './store';
import {Dispatch} from "redux";
import {userType} from "../components/Users/UsersContainer";
import {APIResponseType, ResultCodeEnum} from "../api/api";
import {updateObjectInArray} from "../utils/helpers/object-helpers";
import {usersAPI} from "../api/users-api";

const STATUS_FOLLOW = 'STATUS_FOLLOW'
const STATUS_UNFOLLOW = 'STATUS_UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_FILTER = 'SET_FILTER'


export type InitialState = typeof initialState
export type FilterType = typeof initialState.filter
const initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export const usersReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case STATUS_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case STATUS_UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCH:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return action.followingInProgress
                ? {...state, followingInProgress: [...state.followingInProgress, action.id]}
                : {...state, followingInProgress: state.followingInProgress.filter(el => el !== action.id)}
        case SET_FILTER:
            return {...state, filter: action.payload}
        default:
            return state
    }
}

//Actions -----------
export const followSuccessAC = (userId: number) => ({type: STATUS_FOLLOW, userId} as const)
export const unfollowSuccessAC = (userId: number) => ({type: STATUS_UNFOLLOW, userId} as const)
export const setUsersAC = (users: userType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber} as const)
export const setTotalUsersCountsAC = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, totalUsersCount} as const)
export const setToggleIsFetchAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCH, isFetching} as const)
export const statusFollowingAC = (id: number, followingInProgress: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    id,
    followingInProgress
} as const)
export const setFilterAC = (filter: FilterType) => ({type: SET_FILTER, payload: filter} as const)

// ThunkCreators -------

export const getUserTC = (page: number, pageSize: number, filter: FilterType): AppThunkType => async (dispatch) => {
    dispatch(setToggleIsFetchAC(true))
    dispatch(setCurrentPageAC(page))
    dispatch(setFilterAC(filter))

    const data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
    dispatch(setToggleIsFetchAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountsAC(data.totalCount))
}

/*export const onFollowUserTC = (id: number): AppThunkType => async (dispatch) => {
    dispatch(statusFollowingAC(id, true))
    let data  = await userAPI.follow(id)
    data.resultCode === 0 && dispatch(followSuccessAC(id))
    dispatch(statusFollowingAC(id, false))
}

export const onUnfollowUserTC = (id: number): AppThunkType => async (dispatch) => {
    dispatch(statusFollowingAC(id, true))
    let data  = await userAPI.unfollow(id)
    data.resultCode === 0 && dispatch(unfollowSuccessAC(id))
    dispatch(statusFollowingAC(id, false))
}*/

type DispatchType = Dispatch<ActionsType>

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsType) => {
    dispatch(statusFollowingAC(userId, true));
    let response = await apiMethod(userId);

    if (response.resultCode == ResultCodeEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(statusFollowingAC(userId, false));
}

export const followTC = (userId: number): AppThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccessAC);
    }
}

export const unfollowTC = (userId: number): AppThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccessAC);
    }
}


