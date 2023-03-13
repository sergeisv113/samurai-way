import { GithubUser } from '../../../Types/userGit';

export const isGithubUser = (userGit: any): userGit is GithubUser => 'id' in userGit;
