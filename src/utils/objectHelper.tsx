
import {Field} from "redux-form";
import React from "react";
import {userType} from "../components/Users/UsersContainer";

export const updateObjectInArray = (items: userType[], id: number, objPropName: string, newbjPropss: object) => {
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

