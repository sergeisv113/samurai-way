import { UserType} from "../redux/redux-store";
import {Field} from "redux-form";
import React from "react";

export const updateObjectInArray = (items: UserType[], id: number, objPropName: string, newbjPropss: object) => {
   return  items.map(el => {
        // @ts-ignore
       if (el[objPropName] === id) {
            return {...el, ...newbjPropss}
        }
        return el
    })
}

//for loginisation in LoginForm
export const createField = (placeholder: string, validate: any,typeofform: string,name: string, component: object, props: any, text: string) => {
    return <div>
        <Field placeholder={placeholder} validate={validate}
               typeofform={typeofform}
               name={name}
               component={component}
               {...props}
        /> {text}
    </div>
}

