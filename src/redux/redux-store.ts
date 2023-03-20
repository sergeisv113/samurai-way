
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {
    addPostAC, deletePostAC,
    getUserProfileAC,
    profileReducer,
    setStatusAC,
    UniversalTypeForProfileActions
} from './profile-reducer';
import {dialogsReducer, sendMessageAC, UniversalTypeForMessagesPageType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {
    followSuccessAC, setCurrentPageAC, setToggleIsFetchAC, setTotalUserCountsAC,
    setUsersAC, statusFollowingAC,
    unfollowSuccessAC,
    UniversalTypeForUserActions,
    usersReducer
} from './users-reducer';
import {authReducer, setAuthUserDataAC, UniversalTypeForAuthType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FormAction, reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: RootActionsType) => void
}
export type RootActionsType = UniversalTypeForMessagesPageType
    | UniversalTypeForProfileActions
    | UniversalTypeForUserActions
    | UniversalTypeForAuthType

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    header: HeaderType
}
export type ProfilePageType = {
    posts: PostsProps[]
    // newPostText: string
    profile: UserProfileType | null
    status: string
}
export type HeaderType= {
    auth: AuthType
}
export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching?: boolean
    isAuth: boolean

}
export type MessagesPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    // newMessageText: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
    location: { city: string, country: string }
}

export type UserProfileType = null | {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type PostsProps = {
    id: string
    message: string
    counterLike: string
}
export type MessagesType = {
    id: string
    message: string
}
export type  DialogsType = {
    id: string
    name: string
    ava: string
}
export type FriendsType = {
    id: string
    name: string
    ava: string
}
export type ActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    |ReturnType<typeof  sendMessageAC >
    | ReturnType<typeof   addPostAC >
    | ReturnType<typeof  getUserProfileAC>
    | ReturnType<typeof setStatusAC >
    | ReturnType<typeof  deletePostAC>
| ReturnType<typeof followSuccessAC>
| ReturnType<typeof unfollowSuccessAC>
| ReturnType<typeof setUsersAC>
| ReturnType<typeof setCurrentPageAC>
| ReturnType<typeof setTotalUserCountsAC>
| ReturnType<typeof setToggleIsFetchAC>
| ReturnType<typeof statusFollowingAC>

//-------------------------------------------------------------------------
let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

// export const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export const store = createStore(reducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof reducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType | FormAction >


