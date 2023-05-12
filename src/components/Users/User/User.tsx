import React from 'react';
import s from '../Users.module.css';
import defaultAva from '../../../img/defaultAva.svg';
import {UsersPropsType, userType} from '../UsersContainer';
import {NavLink} from 'react-router-dom';
import {Paginator} from "../../common/Paginator/Paginator";


type UserPropsType = {
    user: userType
        followingInProgress: Array<number>
    unfollowTC: (userId: number) => void
    followTC: (userId: number) => void
}
export const User = (props: UserPropsType) => {
 const {
     user,
     followingInProgress,
     followTC,
     unfollowTC
 } = props
                return (
                    <div>
                            <NavLink to={`/profile/` + user.id }>
                            <img src={user.photos.small !== null ? user.photos.small : defaultAva}
                                 className={s.img} alt={'ava'}/>
                            </NavLink>

                        <div className={s.button}>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          className={s.buttonUnfollowed}
                                          onClick={() => unfollowTC(user.id)}>Unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          className={s.buttonFollowed}
                                          onClick={() => followTC(user.id)}>Follow</button>
                            }
                        </div>


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

