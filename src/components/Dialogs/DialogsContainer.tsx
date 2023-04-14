import React, {ComponentType} from 'react';
import {AppStateType} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {dialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";


type mapStateToPropsType = {
    dialogsPage: dialogsPageType,
    name: string
}
type mapDispatchToPropsType = {
    sendMessage: (newMessage: string, name: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        name: state.auth.login as string
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessage, name) => dispatch(sendMessageAC(newMessage,name))
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs)