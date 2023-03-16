
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, UniversalTypeForProfileActions} from './profile-reducer';
import {dialogsReducer, UniversalTypeForMessagesPageType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {UniversalTypeForUserActions, usersReducer} from './users-reducer';
import {authReducer, UniversalTypeForAuthType} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";

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
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching?: boolean
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
    followingInProgress: Array<string>
}
export type UserType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
    location: { city: string, country: string }
}

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null | string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null | string,
        github: string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: { small: string, large: string }
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

//-------------------------------------------------------------------------
let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    dialog: formReducer
})

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof reducer>


