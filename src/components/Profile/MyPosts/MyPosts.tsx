import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const MyPosts = (props: MyPostsType) => {

    const state = props.profilePage

    const postsElement = state.posts.map((e) => {
        return (
            <Post key={e.id} message={e.message} counterLike={e.counterLike}/>
        )
    })

    // const newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = (values: any) => {
        props.addPost(values.newPostText)
    }

/*    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

    }*/

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
           {/* <div>
                <textarea onChange={onPostChange} value={state.newPostText}/>

            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
*/}          <AddNewPostFormRedux onSubmit={addPost}/>
            <div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    );
}
const AddNewPostForm = (props: InjectedFormProps) => {
    const {handleSubmit} = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"Enter your post"}
                           name={'newPostText'}
                           component={'textarea'}
                    />
                </div>
                <div><button>Add post</button></div>
            </form>
        </>
    )
}
const AddNewPostFormRedux = reduxForm({
    form: 'ProfileAddPostFormRedux'//=no form iz store, a unique for the form
})(AddNewPostForm)