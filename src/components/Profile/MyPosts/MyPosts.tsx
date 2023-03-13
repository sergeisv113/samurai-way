import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';


export const MyPosts = (props: MyPostsType) => {

    const state = props.profilePage

    const postsElement = state.posts.map((e) => {
        return (
            <Post key={e.id} message={e.message} counterLike={e.counterLike}/>
        )
    })

    // const newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        props.addPost()
    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={state.newPostText}/>

            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    );
}

