import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {FormEvent} from "react";
import {FormControl} from "../../common/FormsControls/FormControl";

export type newPostTextPropsType = {
    newPost: string
}

export const NewPostForm = reduxForm<newPostTextPropsType>({
    form: 'newPost'
})(({handleSubmit,reset}: InjectedFormProps<newPostTextPropsType>) => {

        const submitHandler = (e:FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            reset()
            // @ts-ignore
            handleSubmit()
        }
        return <>
            <form onSubmit={submitHandler}>
                <div><Field style={{width: '300px', height: '100px'}} placeholder={"type your post"} name={"newPost"}
                            component={FormControl} typeofform={"textarea"}/></div>
                <div>
                    <button style={{marginTop: '14px'}}>Add post</button>
                </div>
            </form>
        </>
    }
)
