import { LocalGithubUser } from '../../../types/userGit';
import s from './UserStat.module.scss';

export interface UserStatProps extends Pick<
  LocalGithubUser,
  'repos' | 'followers' | 'following'
> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={s.userStat}>
    <div className={s.info}>
      <div className={s.infoTitle}>Repos</div>
      <div className={s.infoNumber}>{repos}</div>
    </div>
    <div className={s.info}>
      <div className={s.infoTitle}>Following</div>
      <div className={s.infoNumber}>{following}</div>
    </div>
    <div className={s.info}>
      <div className={s.infoTitle}>Followers</div>
      <div className={s.infoNumber}>{followers}</div>
    </div>
  </div>
);
