import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';

import { NewPostForm} from "./NewPostForm";

export type newPostPropsType = {
    newPost: string
}
export const MyPosts = ({posts, deletePost, addPost, profile}: MyPostsType) => {

    const postsElements = posts
        .map((p, index) =>
                <Post key={index}
                      profile={profile}
                      id={p.id}
                      date={p.date}
                      message={p.message}
                      likeCount={p.likeCount}
                      deletePost={() => deletePost(p.id)}
                />)


    const addNewPost = (values: newPostPropsType) => {
        addPost(values.newPost)
    }

    return (
        <div className={s.postBlock}>
            <h2>My posts</h2>
            <NewPostForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}
