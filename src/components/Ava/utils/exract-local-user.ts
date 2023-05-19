import { GithubUser, LocalGithubUser } from '../types/userGit';

export const extractLocalUser = (userGit: GithubUser): LocalGithubUser => ({
  login: userGit.login,
  avatar: userGit.avatar_url,
  name: userGit.name,
  bio: userGit.bio,
  blog: userGit.blog,
  company: userGit.company,
  created: userGit.created_at,
  followers: userGit.followers,
  following: userGit.following,
  location: userGit.location,
  repos: userGit.public_repos,
  twitter: userGit.twitter_username,
});
