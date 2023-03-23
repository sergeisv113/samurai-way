import { GithubUser } from '../../../types/userGit';

export const isGithubUser = (userGit: any): userGit is GithubUser => 'id' in userGit;
