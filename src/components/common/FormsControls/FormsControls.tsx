import React from 'react';
import s from './FormsControls.module.css'

const FormsControls =  ({input, meta, child, ...props}:any) => {
    //debugger
    const haseError = meta.error && meta.touched
    return (
        /* <div className={classNames(s.formControl, {[s.error]: error})}>
             {(props.typeofform === "input") && <div><input {...props} {...input}/></div>}
             {(props.typeofform === "textarea") && <div><textarea {...props} {...input}/></div>}
             {error && <span>{meta.error}</span>}
         </div>*/
        <div className={s.formControl + ' ' + (haseError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {haseError && <span>{meta.error}</span>}
        </div>
    )
};


export const Textarea = (props:any) => {
    const {input, meta,children, ...restProps} = props
   //debugger
   // const haseError = meta.error && meta.touched
    return (
       /* <div className={classNames(s.formControl, {[s.error]: error})}>
            {(props.typeofform === "input") && <div><input {...props} {...input}/></div>}
            {(props.typeofform === "textarea") && <div><textarea {...props} {...input}/></div>}
            {error && <span>{meta.error}</span>}
        </div>*/
        <FormsControls {...props}><textarea  {...input} {...restProps}/> </FormsControls>
    )
};

export const Input = (props:any) => {
    const {input, meta,children, ...restProps} = props
    return (
        <FormsControls {...props}><input  {...input} {...restProps}/></FormsControls>
    )
};


