import React, {ChangeEvent, KeyboardEvent} from 'react';

export type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        status: this.props.status,
        editMode: false
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }

    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") this.deactivateEditMode()
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) this.setState({status: this.props.status})
    }

    render() {
        return <>
            <div>
                {this.state.editMode ?
                    <input value={this.state.status||""} onKeyPress={this.onKeyPressHandler} onChange={this.onChangeHandler}
                           onBlur={this.deactivateEditMode} autoFocus/> :
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>}
            </div>
        </>
    }
}
