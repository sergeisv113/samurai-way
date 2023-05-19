import { LocalGithubUser } from '../types/userGit';
import s from './UserCard.module.scss';
import {UserTitle} from "../UserTitle/UserTitle";
import {UserStat} from "../UserStat/UserStat";
import {UserInfo} from "../UserInfo/UserInfo";

export interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <img
        src={props.avatar}
        alt={props.login}
        className={s.avatar}
      />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${s.bio}${props.bio ? '' : ` ${s.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
