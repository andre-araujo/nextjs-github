import 'isomorphic-unfetch';

const API = 'https://api.github.com';

export const getUserInfo = user =>
    fetch(`${API}/users/${user}`);

export const getUserRepos = (user, orderBy = 'stars') =>
    fetch(`${API}/search/repositories?q=user:${user}&sort=${orderBy}`);

export const getRepoInfo = repoName =>
    fetch(`${API}/repos/${repoName}`);
