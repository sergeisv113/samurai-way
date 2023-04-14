import React from 'react';
import {AppStateType} from '../../../redux/store';
import {addPostAC, deletePostAC, PostsType, UserProfileType,} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType


type MapStateToPropsType = {
    posts: PostsType[]
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
    deletePost: (id:string) => void
 }

// ------------

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

    return {
        addPost: (newPost: string) => dispatch(addPostAC(newPost)),
        deletePost: (id) => dispatch(deletePostAC(id))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)