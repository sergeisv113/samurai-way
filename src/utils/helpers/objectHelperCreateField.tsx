import {Field} from "redux-form";
import React from "react";


//for loginisation in LoginForm
export const createField = (placeholder: string, validate: any, typeofform: string, name: string, component: object, props: any, text: string) => {
    return <div>
        <Field placeholder={placeholder} validate={validate}
               typeofform={typeofform}
               name={name}
               component={component}
               {...props}
        /> {text}
    </div>
}

