import {MessagesPageType} from './redux-store';
import {v1} from 'uuid';
import user1 from '../img/user1.svg'
import user2 from '../img/user2.svg'
import user3 from '../img/user3.svg'
import user4 from '../img/user4.svg'


const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    messages: [
        {id: v1(), message: 'Hello, where is my money kurwa?'},
        {id: v1(), message: 'Hi, go to travel'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Im fine, you?'}
    ],
    dialogs: [
        {
            id: v1(),
            name: 'Vlad',
            ava: user1
        },
        {
            id: v1(),
            name: 'Sergey',
            ava: user2
        },
        {
            id: v1(),
            name: 'Ivan',
            ava: user3
        },
        {
            id: v1(),
            name: 'Vasa',
            ava: user4
        },
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: UniversalTypeForMessagesPageType) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state
    }
}

export type UniversalTypeForMessagesPageType =
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof onMessageChangeAC>

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
export const onMessageChangeAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text} as const)