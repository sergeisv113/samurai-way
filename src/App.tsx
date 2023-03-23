import React, {ReactNode} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import AvaContainer from "./components/Ava/AvaContainer";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type PropsType = MapStatePropsType & MapDispatchToProps
type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeTC: () => void
}
 class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
            return (
                !this.props.initialized ? <Preloader/> : (
                    <BrowserRouter>
                        <div className="App">
                            <HeaderContainer />
                            <Navbar/>
                            <div className="app-contents">
                                <div className='app-routes'>
                                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                                    <Route path="/dialog" render={() => <DialogsContainer/>}/>
                                    <Route path="/news" render={() => <News/>}/>
                                    <Route path="/music" render={() => <Music/>}/>
                                    <Route path="/settings" render={() => <Settings/>}/>
                                    <Route path="/users" render={() => <UsersContainer/>}/>
                                    <Route path="/login" render={() => <Login/>}/>
                                </div>
                            </div>
                            <AvaContainer/>
                        </div>
                    </BrowserRouter>
                    )
            )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}
export default
    connect(mapStateToProps, {initializeTC})(App);






