import React, {Suspense, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Avatar, Breadcrumb, Col, Layout, Menu, Row, theme} from 'antd';
import {Preloader} from "./components/common";
import {Header, Music, News, Settings} from "./components";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import s from "./components/Navbar/Navbar.module.css";
import AvaContainer from "./components/Ava/AvaContainer";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Motion} from "./components/Motion/Motion";

const { Content, Footer, Sider } = Layout;

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
    getItem( <NavLink to="/profile" className={s.itemText} activeClassName={s.active}> Profile </NavLink>, '1', <PieChartOutlined />,),
    getItem( <NavLink to="/dialogs" className={s.itemText} activeClassName={s.active}> Dialogs </NavLink>, '2', <DesktopOutlined />),
    getItem( <NavLink to="/users" className={s.itemText} activeClassName={s.active}> Developers </NavLink>, '3', <DesktopOutlined />),
    getItem(<NavLink to="/news"  className={s.itemText} activeClassName={s.active}> News </NavLink>, '4', <DesktopOutlined />),
    getItem( <NavLink to="/music" className={s.itemText} activeClassName={s.active}> Music </NavLink>, '5', <DesktopOutlined />),
    getItem(<NavLink to="/searchGH" className={s.itemText} activeClassName={s.active}> Users GitHub </NavLink>, '6',  <DesktopOutlined />),
    getItem(<NavLink to="/settings" className={s.itemText} activeClassName={s.active}> Settings </NavLink>, 'sub1', <UserOutlined />, [
        getItem('', '7', <NavLink to="/userOnline" className={s.itemText} activeClassName={s.active}> Users ONLINE </NavLink>),
        getItem('', '8', <NavLink to="/motion" className={s.itemText} activeClassName={s.active}> Motion </NavLink>),
    ]),
    /*getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),  <ThemeSwitcher />
    getItem('Files', '9', <FileOutlined />),*/
];

const App1: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />

            </Sider>

            <Layout className="site-layout">
                <Header/>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
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
                <Footer style={{ textAlign: 'center' }}>Devbook ©2023 </Footer>
            </Layout>
        </Layout>
    );
};

export default App1;