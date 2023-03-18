import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validator";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type newPostTextPropsType = {
    newPostText: string
}

let minLength2 = minLengthCreator(2)
let maxLength10 = maxLengthCreator(10)

/*
const AddNewPostForm = (props: InjectedFormProps) => {
    const {handleSubmit} = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"Enter your post"}
                           name={'newPostText'}
                           component={FormsControls}
                           validate={[required,  minLength2, maxLength10]}
                    />
                </div>
                <div><button>Add post</button></div>
            </form>
        </>
    )
}
const AddNewPostFormRedux = reduxForm({
    form: 'ProfileAddPostFormRedux'//=no form iz store, a unique for the form
})(AddNewPostForm)*/

export const AddNewPostForm = reduxForm<newPostTextPropsType>({
    form: 'ProfileAddPostFormRedux'
})((props: InjectedFormProps<newPostTextPropsType>) => {
    const {handleSubmit} = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"Enter your post"}
                           name={'newPostText'}
                           component={Textarea}
                           validate={[required, minLength2, maxLength10]}
                           typeofform={"textarea"}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </>
    )
  }
)
