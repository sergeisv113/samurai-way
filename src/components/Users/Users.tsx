import React from 'react';
import s from './Users.module.css';
import defaultAva from '../../img/defaultAva.svg';
import {UsersPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';



export const Users = (props: UsersPropsType) => {
    const {
        users,
        totalUserCount,
        currentPage,
        pageSize,
        forPageChanged,
        followingInProgress,
        onFollowUser,
        onUnfollowUser
    } = props

    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let slicedPages;
    const curPage = currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2,);
    }

    return (
        <div>
            <div>
                {slicedPages.map((el, index) => {
                    return (
                        <span key={index} onClick={() => forPageChanged(el)}
                              className={currentPage === el ? s.selectedPage : s.spanForPage}>
                                {el}
                            </span>
                    )
                })}...
            </div>

            {users.map(el => {
                return (
                    <div key={el.id} className={s.userBlock}>
                <span className={s.line}>
                        <div>
                            <NavLink to={`/profile/${el.id}`}>
                            <img src={el.photos.small !== null ? el.photos.small : defaultAva}
                                 className={s.img} alt={'ava'}/>
                            </NavLink>
                        </div>
                        <div className={s.button}>
                            {el.followed
                                ? <button disabled={followingInProgress.some(id => id === el.id)}
                                          className={s.buttonUnfollowed}
                                          onClick={() => onUnfollowUser(el.id)}>Unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === el.id)}
                                          className={s.buttonFollowed}
                                          onClick={() => onFollowUser(el.id)}>Follow</button>
                            }
                        </div>
                    </span>

                        <span>
                        <span>
                           <div className={s.urlName}>
                               <NavLink to={`/profile/${el.id}`}>{el.name}</NavLink>
                           </div>
                        <div>{el.status}</div>
                    </span>
                        <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                    </span>
                    </div>)
            })
            }
        </div>
    );
};

