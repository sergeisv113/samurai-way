import React from 'react';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import {userType} from "./UsersContainer";

type UsersPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    onFollowUserTC: (id: number) => void
    onUnfollowUserTC: (id: number) => void
    onChangedPageHandler: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {
    // debugger
    const {
        users,
        totalUsersCount,
        onChangedPageHandler,
        currentPage,
        pageSize,
        followingInProgress,
        onFollowUserTC,
        onUnfollowUserTC
    } = props

/*    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/
    const pageUsers = users.map(user => <User key={user.id}
                                              user={user}
                                              followingInProgress={followingInProgress}
                                              onUnfollowUser={onUnfollowUserTC}
                                              onFollowUser={onFollowUserTC}/>
    )

    return (
        <div>
            {/*<div>
                {pages.map(p => {
                     return (
                        <span  onClick={(e) => forPageChanged(p)}
                              className={currentPage === p ? s.selectedPage : s.spanForPage}>
                                {p}
                            </span>)
                })}
            </div>*/}

            <Paginator  totalItemsCount={totalUsersCount}
                        onChangedPageHandler={onChangedPageHandler}
                        currentPage={currentPage}
                         pageSize={pageSize}
                        // setCurrentPage={setCurrentPage}
            />

                {pageUsers}
            </div>
    );
};

