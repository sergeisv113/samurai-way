import {ActionsType, AppThunkType} from "./store";
import {commentsAPI} from "../api/news-api";

export type CommentType = {
    postId: string
    id: string
    name: string
    email: string
    body: string
}
type InitStateType = typeof initState

    const initState = [] as CommentType[]

export const newsReducer = (state = initState, action: ActionsType): InitStateType => {
        switch (action.type) {
            case 'COMMENTS/GET-COMMENTS':
                return action.news
            default:
                return state
        }
    }

    export const getCommentsAC = (news: CommentType[]) => ({type: 'COMMENTS/GET-COMMENTS', news} as const)

    export const getCommentsTC = (): AppThunkType => (dispatch) => {
        commentsAPI.getComments()
            .then((res) => {
                dispatch(getCommentsAC(res.data))
            })
    }

