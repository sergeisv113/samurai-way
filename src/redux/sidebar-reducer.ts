
import friend1 from '../img/friend1.svg'
import friend2 from '../img/friend2.svg'
import friend3 from '../img/friend3.svg'

const initialState: SidebarType = {
    friends: [
        {
            id: '1',
            name: 'Kolya',
            ava: friend1
        },
        {            id: '2',
            name: 'Kostya',
            ava: friend2
        },
        {
            id:  '3',
            name: 'Ivan',
            ava: friend3
        },
    ]
}

export const sidebarReducer = (state = initialState, action: any): SidebarType => {
    return state
};

export type SidebarType = {
    friends: FriendType[]
}
export type FriendType = {
    id: string, name: string, ava: string
}