import React from 'react';
import {AppStateType, MessagesPageType, RootActionsType} from '../../redux/redux-store';
import { sendMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hok/withAuthRedirect';


export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    messagesPage: MessagesPageType
    isAuth: boolean;
}
type MapDispatchPropsType = {
    sendMessage: (newMessageText: string) => void
    // onMessageChange: (text: string) => void
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
        sendMessage: (newMessageText: string) => {
            dispatch(sendMessageAC(newMessageText))
        },
       /* onMessageChange: (text: string) => {   tak kak pereveli na form
            dispatch(onMessageChangeAC(text))
        }*/
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