import s from './FormsControls.module.css'
import classNames from "classnames";
import React from "react";

export const FormControl = ({input, meta, ...props}: any) => {
  const error = meta.error && meta.touched
  return <div className={classNames(s.formControl, {[s.error]: error})}>
    {(props.typeofform === "input") && <div><input {...props} {...input}/></div>}
    {(props.typeofform === "textarea") && <div><textarea {...props} {...input}/></div>}
    {error && <span>{meta.error}</span>}
  </div>
}
