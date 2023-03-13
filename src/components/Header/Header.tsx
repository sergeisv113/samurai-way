import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderPropsType} from './HeaderContainer';
import logo from '../../img/logo.svg'

export const Header:React.FC<HeaderPropsType> = ({isAuth,login}) => {
    return (
        <div className={s.header}>
            <header >
                       <img src={logo} alt="logo"/>
                   <div className={s.loginBlock}>
                       {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
               </div>
            </header>
        </div>
    );
};

