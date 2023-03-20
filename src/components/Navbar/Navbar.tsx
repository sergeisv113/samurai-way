import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {Sidebar} from '../Sidebar/Sidebar';

type NavbarPropsType = {
}


export const Navbar = (props: NavbarPropsType) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={s.itemText} activeClassName={s.active}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialog" className={s.itemText} activeClassName={s.active}> Message </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={s.itemText} activeClassName={s.active}> Users </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"  className={s.itemText} activeClassName={s.active}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={s.itemText} activeClassName={s.active}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={s.itemText} activeClassName={s.active}> Settings </NavLink>
            </div>
            <div className={s.sidebar}>
                 <Sidebar/>
            </div>

        </nav>
    );
};

