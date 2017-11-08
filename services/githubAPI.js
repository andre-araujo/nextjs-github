import 'isomorphic-unfetch';

export const getOrigin = req =>
    (req ? `${req.protocol}://${req.get('Host')}` : window.location.origin);

export const getUserInfo = (origin, user) =>
    fetch(`${origin}/api/users/${user}`);

export const getUserRepos = (origin, user, orderBy = 'stars') =>
    fetch(`${origin}/api/search/repositories?q=user:${user}&sort=${orderBy}`);

export const getRepoInfo = (origin, reponame) =>
    fetch(`${origin}/api/repos/${reponame}`);
