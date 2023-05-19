import React from 'react';
import s from './Header.module.css'
import {Link, NavLink} from 'react-router-dom';
import { Button, Col, Layout, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {logoutTC} from "../../redux/auth-reducer";


export const Header = () => {

 const isAuth = useSelector(selectIsAuth)
 const login = useSelector(selectCurrentUserLogin)
    const dispatch = useDispatch()

    const logoutCallBack = () => {
     dispatch(logoutTC())
    }

 const {Header} = Layout

    return <Header className={'header'} style={{ backgroundColor: '#1677ff'}}>
        <Row>
            <Col span={14}>
                <h1>Devbook</h1>
            </Col>

            <Col span={8}>

                    <div className={s.loginBlock}>
                        {isAuth
                            ? <>{login} <Button  type="primary" onClick={logoutCallBack}>Log out</Button></>
                            : <Link to={'/login'}>login</Link>
                        }
                    </div>
            </Col>
        </Row>
        </Header>
};

