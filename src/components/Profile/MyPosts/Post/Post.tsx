import React from 'react';
import s from './Post.module.css'
import {UserProfileType} from "../../../../redux/profile-reducer";
import defaultPhoto from "../../../../img/defaultAva.svg"
import {Button} from "antd";

type PostType = {
    id: string
    profile: UserProfileType
    date: string
    message: string
    likeCount: number
    deletePost: () => void
}

export const Post = ({profile, deletePost, message, date, likeCount}: PostType) => {
    return <div className={s.post}>
        <div className={s.item}>
            <div>
                <img src={profile?.photos.small || defaultPhoto}/>
                {date}
            </div>
            <Button type="primary" className={s.button} onClick={deletePost}>x</Button>
        </div>
        <div>{message}</div>
        <div><span>____{likeCount} likes____</span></div>
    </div>
};

