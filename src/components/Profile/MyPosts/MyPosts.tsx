import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validator";
import {AddNewPostForm} from "./NewPostForm";


export const MyPosts = (props: MyPostsType) => {

    // const state = props.profilePage

    const postsElement = props.posts.map((e) => {
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
*/}
            <AddNewPostForm onSubmit={addPost}/>
            <div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    );
}
