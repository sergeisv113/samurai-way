import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";



export const Users = (props: UsersPropsType) => {
    const {
        users,
        totalUserCount,
        currentPage,
        pageSize,
        setCurrentPage,
        followingInProgress,
        onFollowUser,
        onUnfollowUser
    } = props

/*    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/

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

            <Paginator  totalUserCount={totalUserCount}
            currentPage={currentPage}
            pageSize={pageSize}
                        setCurrentPage={setCurrentPage}/>

            <div>
                {users.map(el => <User key={el.id}
                                       user={el}
                                       followingInProgress={followingInProgress}
                                       onUnfollowUser={onUnfollowUser}
                                       onFollowUser={onFollowUser}/>)
                }
            </div>
        </div>
    );
};

