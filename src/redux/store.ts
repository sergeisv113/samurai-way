import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {
    addPostAC,
    deletePostAC,
    profileReducer,
    savePhotoSuccessAC,
    setUserProfileAC,
    setUserStatusAC,
} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, } from "./dialogs-reducer";

import {authReducer, getCaptchaUrlSuccessAC, setAuthUserDataAC} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {appReducer} from "./app-reducer";
import {
    followSuccessAC,
    setCurrentPageAC, setToggleIsFetchAC,
    setTotalUsersCountsAC,
    setUsersAC, statusFollowingAC,
    unfollowSuccessAC,
    usersReducer
} from "./users-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type storeType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType =
    | ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountsAC>
    | ReturnType<typeof setToggleIsFetchAC>
    | ReturnType<typeof statusFollowingAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof savePhotoSuccessAC>
    | ReturnType<typeof getCaptchaUrlSuccessAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    sidebar: sidebarReducer
})

// for Profiler ext
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType | FormAction>
