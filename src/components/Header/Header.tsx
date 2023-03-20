import React, {ReactNode} from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg'

type PropsType = {
    children?: ReactNode
    isAuth: boolean
    login: string | null
    logout: () => void
}
export const Header = (props: PropsType) => {
    return (
        <div className={s.header}>
            <header >
                       <img src={logo} alt="logo"/>
                   <div className={s.loginBlock}>
                       {props.isAuth
                           ? <>{props.login}<button onClick={props.logout}>logout</button></>
                           : <NavLink to={'/login'}>login</NavLink>}
               </div>
            </header>
        </div>
    );
};

