import React from 'react';
import {AppStateType, MessagesPageType, RootActionsType} from '../../redux/redux-store';
import {onMessageChangeAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {Redirect} from "react-router-dom";
import DialogsContainer from "./DialogsContainer";

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    messagesPage: MessagesPageType
    isAuth: boolean;
}
type MapDispatchPropsType = {
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

// ----------------


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth//redirect
    }
}

let mapDispatchToProps = (dispatch: Dispatch<RootActionsType>): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        onMessageChange: (text: string) => {
            dispatch(onMessageChangeAC(text))
        }
    }
}

/*let AuthRedirectComponent = (props: DialogsPropsType) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}*/
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs)