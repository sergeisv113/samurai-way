import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import {HashRouter} from 'react-router-dom';
import {AppStateType, store} from "./redux/store";
import {connect, Provider} from "react-redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {DarkMenu} from "./DarkMenu";


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
            <DarkMenu/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = connect(mapStateToProps, {initializeTC})(App);

let SamApp = () => {

    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamApp



