import React, {ChangeEvent, useState} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string)=> void
}
export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {
    // export class ProfileStatusWithHooks extends React.Component<ProfileStatusProps>{
 /*   //local state
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

/!*    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {//otrisovka statusa*!/
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
  */

 const [editMode, setEditMode] = useState(false);
 const [status, setStatus] = useState(props.status);

 const activateEditeMode = () => setEditMode(true)
 const deactivateEditeMode = () => setEditMode(false)
 let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
     setStatus(e.currentTarget.value)
     props.updateStatus(status)//izmen na server
    }

        return (
            <div>
                {! editMode &&
                    <div>
                        <span onDoubleClick={activateEditeMode}>{props.status || 'NO STATUS'}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input autoFocus={true} onBlur={deactivateEditeMode} value={status} onChange={onStatusChange}/>
                    </div>
                }
            </div>
        );
    };

