import { ActionsType} from './store';
import {Dispatch} from "redux";
import {userType} from "../components/Users/UsersContainer";
import {userAPI} from "../api/api";

const STATUS_FOLLOW = 'STATUS_FOLLOW'
const STATUS_UNFOLLOW = 'STATUS_UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type InitialStateType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case STATUS_FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case STATUS_UNFOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCH:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return action.followingInProgress
                    ?  {...state, followingInProgress: [...state.followingInProgress, action.id] }
                    : {...state, followingInProgress: state.followingInProgress.filter(el => el !== action.id)}
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
export const statusFollowingAC = (id: number, followingInProgress: boolean) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, id, followingInProgress} as const)

// ThunkCreators -------

export const getUserTC = (page: number, pageSize: number) => async  (dispatch: Dispatch) => {
    dispatch(setToggleIsFetchAC(true))
     dispatch(setCurrentPageAC(page))

  const data = await  userAPI.getUsers(page, pageSize)
            dispatch(setToggleIsFetchAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountsAC(data.totalCount))
}

export const onFollowUserTC = (id: number) => async (dispatch: Dispatch) => {
    dispatch(statusFollowingAC(id, true))
    let data  = await userAPI.follow(id)
    data.resultCode === 0 && dispatch(followSuccessAC(id))
    dispatch(statusFollowingAC(id, false))
}

export const onUnfollowUserTC = (id: number) => async (dispatch: Dispatch) => {
    dispatch(statusFollowingAC(id, true))
    let data  = await userAPI.unfollow(id)
    data.resultCode === 0 && dispatch(unfollowSuccessAC(id))
    dispatch(statusFollowingAC(id, false))
}
