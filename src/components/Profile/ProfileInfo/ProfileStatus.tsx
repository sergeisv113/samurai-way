import React, {ChangeEvent} from 'react';

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

/*    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {//otrisovka statusa*/
    componentDidUpdate(prevProps: { status: string; }, prevState: any) {//otrisovka statusa
        // debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'NO STATUS'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status} onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        );
    }
};

