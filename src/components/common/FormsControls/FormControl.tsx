import React from 'react';
import s from './FormControl.module.css'
import classNames from "classnames";


export const FormControl = ({input, meta, ...props}: any) => {

    const hasError = meta.error && meta.touched

    return <div className={classNames(s.formControl, {[s.error]: hasError})}>

        {(props.typeofform === "input") && <div><input {...props} {...input}/></div>}

        {(props.typeofform === "textarea") && <div><textarea {...props} {...input}/></div>}

        {hasError && <span>{meta.error}</span>}
    </div>
}





