import React from 'react';
import s from './Friends.module.css'
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {FriendType} from "../../../redux/sidebar-reducer";

export type FriendPropsType = {
    id: string
    name: string
    ava: string
}

export const Friends = (props: FriendPropsType) => {
    let path = `${props.id}`

    return (
        < div className={s.friends}>

            <div className={s.ava}>
                <NavLink to={path}><img src={props.ava}/> </NavLink>
            </div>

            <div className={s.name}>
                <NavLink  activeClassName={s.active} to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export const FriendRender = () =>{

    const friends = useSelector<AppStateType,FriendType[]>(state => state.sidebar.friends)
    const friendsElement = friends.map((e) => {
        return (
            <Friends key={e.id} id={e.id} ava={e.ava} name={e.name}/>
        )
    })
    return (
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.active}> <h2>Friends ONLINE</h2> </NavLink>
            {friendsElement}
        </div>
    );
}
