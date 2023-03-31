import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    counterLike: string
    id: string
}

export const Post = (props: PostType) => {
    return (
        <div className={s.posts}>
            <img src="https://i.pinimg.com/736x/1e/33/a5/1e33a5fad800ee8e782ad87e63169187.jpg"/>
            {props.message}
            <div>
                <span> like {props.counterLike}</span>
            </div>
        </div>
    );
};

