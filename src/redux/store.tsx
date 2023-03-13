import React from 'react';
import {profileReducer, UniversalTypeForProfileActions} from './profile-reducer';
import {dialogsReducer, UniversalTypeForMessagesPageType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

// export type StorePropsType = {
//     _state: StatePropsType
//     getState: () => StatePropsType
//     _callSubscriber: (state: StatePropsType) => void
//     subscribe: (observer: (state: StatePropsType) => void) => void
//     dispatch: (action: RootActionsType) => void
// }
//
// export type RootActionsType =  UniversalTypeForMessagesPageType | UniversalTypeForProfileActions
//
// export type StatePropsType = {
//     profilePage: ProfilePageType
//     messagesPage: MessagesPageType
//     sidebar: SidebarType
//
// }
//
// export type ProfilePageType = {
//     posts: PostsProps[]
//     newPostText: string
//
//
// }
// export type MessagesPageType = {
//     messages: MessagesType[]
//     dialogs: DialogsType[]
//     newMessageText: string
// }
//
// export type PostsProps = {
//     id: string
//     message: string
//     counterLike: string
// }
//
// export type MessagesType = {
//     id: string
//     message: string
// }
//
// export type  DialogsType = {
//     id: string
//     name: string
//     ava: string
// }
//
// export type SidebarType = {
//     friends: FriendsType[]
// }
//
// export type FriendsType = {
//     id: string
//     name: string
//     ava: string
// }


// data--------------------------------------------------------------------------
// export const store: StorePropsType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: '1', message: 'Hi, it\'s  my first post', counterLike: '12'},
//                 {id: '2', message: 'Hola, howe are you?', counterLike: '24'},
//                 {id: '3', message: 'Yo!', counterLike: '11'},
//                 {id: '4', message: 'GG', counterLike: '1'},
//             ],
//             newPostText: '',
//         },
//
//         messagesPage: {
//             messages: [
//                 {id: '1', message: 'Hello, where is my money?'},
//                 {id: '2', message: 'Hi, go to travel'},
//                 {id: '3', message: 'How are you?'},
//                 {id: '4', message: 'Im fine, you?'}
//             ],
//             dialogs: [
//                 {
//                     id: '1',
//                     name: 'Vlad',
//                     ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdOOA5xjQZ0YRma-ynNFyV_FW2jRW2pw87g&usqp=CAU'
//                 },
//                 {
//                     id: '2',
//                     name: 'Sergey',
//                     ava: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg'
//                 },
//                 {
//                     id: '3',
//                     name: 'Ivan',
//                     ava: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg'
//                 },
//                 {
//                     id: '4',
//                     name: 'Vasa',
//                     ava: 'https://abrakadabra.fun/uploads/posts/2021-12/1639902118_3-abrakadabra-fun-p-ugarnie-avatarki-dlya-ks-3.png'
//                 },
//             ],
//             newMessageText: '',
//         },
//
//         sidebar: {
//             friends: [
//                 {
//                     id: '5',
//                     name: 'Kolya',
//                     ava: 'http://sun9-46.userapi.com/s/v1/if1/QLRXqMzrbGKJTuTFoOaZpgGD2dIYHcgy-BLYSXnmlGNgvJzqtIqc1iYKoCOxaZUyZshULg.jpg?size=200x200&quality=96&crop=20,20,564,564&ava=1'
//                 },
//                 {
//                     id: '6',
//                     name: 'Kostya',
//                     ava: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg'
//                 },
//                 {
//                     id: '7',
//                     name: 'Ivan',
//                     ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0017.jpg'
//                 },
//             ]
//         }
//     },
//     _callSubscriber(state: StatePropsType) {
//         console.log('State changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: StatePropsType) => void) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: RootActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action as UniversalTypeForProfileActions)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action as UniversalTypeForMessagesPageType)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber(this._state)
//     }
// }






