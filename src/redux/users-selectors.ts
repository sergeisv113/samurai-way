import {AppStateType, UserType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

/*export const getUsersSuper = (state: AppStateType) => {
    return getUsers(state).filter(u => true)
}
export const getUsersSuperSelector = createSelector((state: AppStateType) => {
    return state.usersPage.users.filter(u => true)
})*/
/*export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users:  UserType[]) => {
     return  users.filter(u => true)// cache data
})*/
/*
export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users:  UserType[], isFetching: boolean) => {
    return  users.filter(u => true)// cache data
})*/
