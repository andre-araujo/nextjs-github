import 'isomorphic-unfetch';

const API = 'https://api.github.com';

export const getUserInfo = user =>
    fetch(`${API}/users/${user}`);

export const getUserRepos = user =>
    fetch(`${API}/users/${user}/repos`);

export const getRepoInfo = repoName =>
    fetch(`${API}/repos/${repoName}`);
