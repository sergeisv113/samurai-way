import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "components/common/FormsControls/FormsControls";
import {ContactsType} from "redux/profile-reducer";
import s from '../ProfileInfo.module.css'

type PropsType = {
  contacts: ContactsType
}

export type FormProfileDataType = {
  aboutMe: string
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  contacts: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  }
}

export const ProfileDataForm = reduxForm<FormProfileDataType, PropsType>({form: 'profileDataForm'})
(({handleSubmit, contacts}: PropsType & InjectedFormProps<FormProfileDataType, PropsType>
  ) => {
    return (
      <form style={{width: '300px'}} onSubmit={handleSubmit}>
        <div><b>Full name</b><Field style={{width: '250px'}} name={"fullName"} component={FormControl}
                                    typeofform={"input"}/></div>
        <div style={{display: 'flex'}}><b>Looking for a job</b><Field name={"lookingForAJob"} component={FormControl}
                                                                      typeofform={"input"}
                                                                      type={'checkbox'}/></div>
        <div><b>My professional skills</b><Field style={{width: '250px'}} name={"lookingForAJobDescription"}
                                                 component={FormControl}
                                                 typeofform={"textarea"}/></div>
        <div><b>About me</b><Field style={{width: '250px'}} name={"aboutMe"} component={FormControl}
                                   typeofform={"textarea"}/></div>
        <div><b>My contacts: </b>
          {(Object.keys(contacts) as Array<keyof typeof contacts>)
            .map((key, i) => {
              return <div key={i}>
                {key}
                <Field
                  style={{width: '250px'}}
                  name={`contacts.${String(key)}`}
                  component={FormControl}
                  typeofform={"input"}
                />
              </div>
            })
          }
        </div>
        <div style={{marginTop: '16px'}}>
          <button className={s.button}>save</button>
        </div>
      </form>
    )
  }
)