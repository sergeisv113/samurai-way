import React from 'react';
import s from './FormsControls.module.css'
import classNames from "classnames";

export const FormsControls =  ({input, meta, child, ...props}:any) => {
    //debugger
    const haseError = meta.error && meta.touched
    return (
       <div className={classNames(s.formControl, {[s.error]: haseError})}>
             {(props.typeofform === "input") && <div><input {...props} {...input}/></div>}
             {(props.typeofform === "textarea") && <div><textarea {...props} {...input}/></div>}

             {haseError && <span>{meta.error}</span>}
         </div>

    )
};



