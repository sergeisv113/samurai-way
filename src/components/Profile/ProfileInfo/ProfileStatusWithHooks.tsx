import React, {ChangeEvent, useEffect, useState, KeyboardEvent} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatusTC: (status: string)=> void
}
export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {

 const [editMode, setEditMode] = useState(false);
 const [status, setStatus] = useState(props.status);

 useEffect(() => {
     setStatus(props.status)
 }, [props.status])

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        // props.updateStatus(status)//izmen na server
    }
 const activateEditeMode = () => setEditMode(true)
 const deactivateEditeMode = () =>{
     setEditMode(false)
     props.updateStatusTC(status)//izmen na server
 }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") deactivateEditeMode()
    }

        return (
            <>
                {editMode
                    ? <input value={status || ''}
                             onBlur={deactivateEditeMode}
                             onChange={onStatusChange}
                             autoFocus
                             onKeyPress={onKeyPressHandler}/>
                    : <span onDoubleClick={activateEditeMode}><b>{props.status || 'NO STATUS'}</b></span>
                }
            </>
        );
    };

