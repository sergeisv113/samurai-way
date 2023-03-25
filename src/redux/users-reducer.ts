import {UserType, UsersPageType, AppThunkType} from './redux-store';
import {userAPI} from "../api/api";

const STATUS_FOLLOW = 'STATUS_FOLLOW'
const STATUS_UNFOLLOW = 'STATUS_UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UniversalTypeForUserActions) => {
    switch (action.type) {
        case STATUS_FOLLOW: {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case STATUS_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCH: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(el => el !== action.id)
            }
        }
        default:
            return state
    }
}
// ActionCreators -----------
export type UniversalTypeForUserActions =
    | ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountsAC>
    | ReturnType<typeof setToggleIsFetchAC>
    | ReturnType<typeof statusFollowingAC>
//Actions -----------
export const followSuccessAC = (userId: number) => ({type: STATUS_FOLLOW, userId} as const)
export const unfollowSuccessAC = (userId: number) => ({type: STATUS_UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCountsAC = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, totalUsersCount} as const)
export const setToggleIsFetchAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCH, isFetching} as const)
export const statusFollowingAC = (id: number, isFetching: boolean) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, id, isFetching,} as const)
// ThunkCreators -------
export const getUserTC = (currentPage: number, pageSize: number): AppThunkType =>  (dispatch) => {
        dispatch(setToggleIsFetchAC(true))
        dispatch(setCurrentPageAC(currentPage))

        userAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setToggleIsFetchAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUserCountsAC(data.totalCount))
            })
    }

export const onFollowUserTC = (id: number): AppThunkType => (dispatch) => {
        dispatch(statusFollowingAC(id, true))
        userAPI.followOnUser(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followSuccessAC(id))
                }
                dispatch(statusFollowingAC(id, false))
            })
    }


export const onUnfollowUserTC = (id: number): AppThunkType =>  (dispatch) => {
        dispatch(statusFollowingAC(id, true))
        userAPI.unfollowOnUser(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(id))
                }
                dispatch(statusFollowingAC(id, false))
            })
    }

export const forPageChangedTC = (currentPage: number, pageSize: number): AppThunkType => (dispatch) => {
        dispatch(setToggleIsFetchAC(true))
        dispatch(setCurrentPageAC(currentPage))
        userAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setToggleIsFetchAC(false))
                dispatch(setUsersAC(data.items))
            })
    }
