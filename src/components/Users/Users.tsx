import React from 'react';
import {Paginator} from "../common/Paginator/Paginator";
import {userType} from "./UsersContainer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import UsersSearchForm from "./User/UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";
import {User} from "./User/User";
import s from './Users.module.css'
import {Separator} from "../common";

type UsersPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
    onChangedPageHandler: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
}

export const Users = (props: UsersPropsType) => {
    // debugger
    const {
        users,
        totalUsersCount,
        onFilterChanged,
        onChangedPageHandler,
        currentPage,
        pageSize,
        followingInProgress,
        unfollowTC,
        followTC
    } = props

    /*    const pagesCount = Math.ceil(totalUserCount / pageSize)
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }*/
    const pageUsers = users.map(user => <User key={user.id}
                                              user={user}
                                              followingInProgress={followingInProgress}
                                              unfollowTC={unfollowTC}
                                              followTC={followTC}/>
    )

    return (
        <div className={s.users}>
            <Separator title={'Developers'}/>
            <div className={s.usersSearch}>
                <UsersSearchForm  onFilterChanged={onFilterChanged}/>
            </div>
            <div className={s.usersPaginator}>
            <Paginator totalItemsCount={totalUsersCount}
                          onChangedPageHandler={onChangedPageHandler}
                       currentPage={currentPage}
                       pageSize={pageSize}/>
            </div>
            <div className={s.userBlock}>
                {pageUsers}
            </div>
        </div>
    );

}

