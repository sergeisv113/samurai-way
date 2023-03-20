import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validator";
import React from "react";
import {FormsControls} from "../../common/FormsControls/FormsControls";

export type newPostTextPropsType = {
    newPostText: string
}

let minLength2 = minLengthCreator(2)
let maxLength10 = maxLengthCreator(10)


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
                           component={FormsControls}
                           validate={[required, minLength2, maxLength10]}
                           typeofform={"input"}
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
