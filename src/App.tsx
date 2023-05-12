import React, {Suspense, useState} from 'react';
import './App.css';
import 'antd/dist/reset.css';
import {Navbar} from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from "./components/Login/Login";
import AvaContainer from "./components/Ava/AvaContainer";
import {AppStateType, store} from "./redux/store";
import {connect, Provider} from "react-redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import App1 from "./App1";
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer  = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


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
         return !this.props.initialized ? <Preloader/> : (
             /*<div className="App">
                 <HeaderContainer/>
                 <Navbar/>
                 <div className="app-contents">
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
                         <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                     </Switch>
                 </div>
                 <AvaContainer/>
             </div>*/
             <App1/>
         )
     }
 }

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer  = connect(mapStateToProps, {initializeTC})(App);

 let SamApp = () => {
  // return  <BrowserRouter basename={process.env.PUBLIC_URL}>
  return  <HashRouter>
      <Provider store={store}>
          <AppContainer/>
      </Provider>
  </HashRouter>
}
export default SamApp



