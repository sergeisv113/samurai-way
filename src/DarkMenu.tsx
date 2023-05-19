import React, {Suspense, useState} from 'react';
import {
    HomeOutlined,
    TeamOutlined,
    NotificationOutlined,
    UserOutlined,
    ToolOutlined,
    GithubOutlined,
    SoundOutlined,
    WechatOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, Row, theme} from 'antd';
import {Preloader} from "./components/common";
import {Header, Music, News, Settings} from "./components";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import s from "./components/Navbar/Navbar.module.css";
import AvaContainer from "./components/Ava/AvaContainer";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Motion} from "./components/Motion/Motion";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const {Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<NavLink to="/profile" className={s.itemText} activeClassName={s.active}> Profile </NavLink>, 'item-1',
        <UserOutlined/>),
    getItem(<NavLink to="/dialogs" className={s.itemText} activeClassName={s.active}> Dialogs </NavLink>, 'item-2',
        <WechatOutlined/>),
    getItem(<NavLink to="/users" className={s.itemText} activeClassName={s.active}> Developers </NavLink>, '3',
        <TeamOutlined/>),
    getItem(<NavLink to="/news" className={s.itemText} activeClassName={s.active}> News </NavLink>, '4',
        <NotificationOutlined/>),
    getItem(<NavLink to="/music" className={s.itemText} activeClassName={s.active}> Music </NavLink>, '5',
        <SoundOutlined/>),
    getItem(<NavLink to="/searchGH" className={s.itemText} activeClassName={s.active}> Users GitHub </NavLink>, '6',
        <GithubOutlined/>),
    getItem(<NavLink to="/settings" className={s.itemText} activeClassName={s.active}> Settings </NavLink>, 'sub1',
        <ToolOutlined/>, [
            getItem('', '7', <NavLink to="/userOnline" className={s.itemText} activeClassName={s.active}> Users
                ONLINE </NavLink>),
            getItem('', '8', <NavLink to="/motion" className={s.itemText}
                                      activeClassName={s.active}> Motion </NavLink>),
        ]),
];

export const DarkMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>

            </Sider>

            <Layout className="site-layout">
                <Header/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}} separator="">
                        <Breadcrumb.Item href="">
                            <HomeOutlined/>
                        </Breadcrumb.Item>

                    </Breadcrumb>
                    <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                        <Switch>
                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                            <Route exact path={"/"} render={() => <Redirect to={'/profile'}/>}/>

                            <Route path={"/dialogs"} render={() => <Suspense fallback={<Preloader/>}>
                                <DialogsContainer/></Suspense>}/>
                            <Route path={"/news"} render={() => <News/>}/>
                            <Route path={"/music"} render={() => <Music/>}/>
                            <Route path={"/settings"} render={() => <Settings/>}/>
                            <Route path={"/users"} render={() => <UsersContainer/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"/searchGH"} render={() => <AvaContainer/>}/>
                            <Route path={"/userOnline"} render={() => <Sidebar/>}/>
                            <Route path={"/motion"} render={() => <Motion/>}/>
                            <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Devbook ©2023 </Footer>
            </Layout>
        </Layout>
    );
};

