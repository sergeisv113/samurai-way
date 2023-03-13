import {SidebarType} from './redux-store';
import {v1} from 'uuid';
import friend1 from '../img/friend1.svg'
import friend2 from '../img/friend2.svg'
import friend3 from '../img/friend3.svg'

const initialState = {
    friends: [
        {
            id: v1(),
            name: 'Kolya',
            ava: friend1
        },
        {
            id: v1(),
            name: 'Kostya',
            ava: friend2
        },
        {
            id: v1(),
            name: 'Ivan',
            ava: friend3
        },
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: any) => {
    return state
};

