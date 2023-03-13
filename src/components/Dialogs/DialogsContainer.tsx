import React from 'react';
import {AppStateType, MessagesPageType, RootActionsType} from '../../redux/redux-store';
import {onMessageChangeAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hok/withAuthRedirect';

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    messagesPage: MessagesPageType
}

type MapDispatchPropsType = {
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

// ---------------------------------------------------------------------------------------


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
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


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)