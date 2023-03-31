import {AppThunkType} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";


type initialStateType = {
    initialized: boolean
}
export type initUserSuccessPropsType = ReturnType<typeof initializedSuccessAC>
type ActionType =
    | initUserSuccessPropsType
const INITUSER_SUCCESS = 'INITUSER_SUCCESS'

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case INITUSER_SUCCESS:
            return {...state, initialized: true}
        default:
         return state
    }
};
//AC
export const initializedSuccessAC = () => ({type: INITUSER_SUCCESS} as const)
//thunk
/*export const initializeTC = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserDataTC())//poluch init data
        .then(() => {
        dispatch(initializedSuccessAC())
    })
}*/
export const initializeTC = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())//poluch init data
        Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccessAC())
        })
}

