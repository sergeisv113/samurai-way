import {ActionsType} from "./store";
import {v1} from "uuid";

const initialState: dialogsPageType = {
    messages: [
        {id: v1(), text: "Hello"},
        {id: v1(), text: "How are you?"},
        {id: v1(), text: "Good bye"},
    ],
    dialogs: [
        {id: v1(), name: "Nikita"},
        {id: v1(), name: "Dasha"},
        {id: v1(), name: "Asya"},
    ],
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: v1(), text: action.newMessage}],
                dialogs: [...state.dialogs, {id: v1(), name: action.name}]
            }
        default:
            return state
    }
}

// actions
export const sendMessageAC = (newMessage: string, name: string) => ({
    type: 'SEND-MESSAGE',
    newMessage,
    name
} as const)


// types
export type sendMessageActionType = ReturnType<typeof sendMessageAC>
export type dialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type DialogsType = {
    id: string, name: string
}
export type MessagesType = {
    id: string, text: string
}