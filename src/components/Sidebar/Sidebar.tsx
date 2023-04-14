import React from 'react';
import {FriendRender, Friends} from './Friends/Friends';
import s from './Sidebar.module.css'


export type SidebarPropsType = {
    // state: SidebarType
}
export const Sidebar = () => {
    return (
            <div className={s.item}>
                <FriendRender/>
            </div>
    );
};

