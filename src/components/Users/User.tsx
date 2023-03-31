import React from 'react';
import s from './Users.module.css';
import defaultAva from '../../img/defaultAva.svg';
import {UsersPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import {Paginator} from "../common/Paginator/Paginator";
import {UserType} from "../../redux/redux-store";

type UserPropsType = {
    user: UserType
        followingInProgress: Array<number>
    onFollowUser: (id: number) => void
    onUnfollowUser: (id: number) => void
}
export const User = (props: UserPropsType) => {
 const {
     user,
     followingInProgress,
     onFollowUser,
     onUnfollowUser
 } = props
                return (
                    <div>
                        <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small !== null ? user.photos.small : defaultAva}
                                 className={s.img} alt={'ava'}/>
                            </NavLink>
                        </div>
                        <div className={s.button}>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          className={s.buttonUnfollowed}
                                          onClick={() => onUnfollowUser(user.id)}>Unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          className={s.buttonFollowed}
                                          onClick={() => onFollowUser(user.id)}>Follow</button>
                            }
                        </div>
                    </span>

                        <span>
                        <span>
                           <div className={s.urlName}>
                               {user.name}
                           </div>
                        <div>{user.status}</div>
                    </span>
                        <span>
                        <div>{user.location?.country}</div>
                        <div>{user.location?.city}</div>
                    </span>
                    </span>
                    </div>)

};

