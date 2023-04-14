import React, {ChangeEvent, KeyboardEvent} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string)=> void
}
export class ProfileStatus extends React.Component<ProfileStatusProps>{
    //local state
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditeMode = () =>  {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") this.deactivateEditeMode()
    }

/*    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {//otrisovka statusa*/
    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) this.setState({status: this.props.status})
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input
                        onKeyPress={this.onKeyPressHandler}
                        onChange={this.onStatusChange}
                        autoFocus
                        onBlur={this.deactivateEditeMode}
                        value={this.state.status||""}/>
                    : <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'NO STATUS'}</span>
                }
            </div>
        );
    }
};

