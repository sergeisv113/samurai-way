import {AppThunkType} from "./store";
import {getAuthUserDataTC} from "./auth-reducer";


export type initialStateType = {
    initialized: boolean
}
export type initUserSuccessPropsType = ReturnType<typeof initializedSuccessAC>
type ActionType =
    | initUserSuccessPropsType
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: action.initialized}
        default:
         return state
    }
};
//AC
export const initializedSuccessAC = (initialized: boolean) => ({type: INITIALIZED_SUCCESS, initialized} as const)
//thunk

export const initializeTC = (): AppThunkType => (dispatch) => {
     dispatch(getAuthUserDataTC()).then(() => {
             dispatch(initializedSuccessAC(true))
        })
}

