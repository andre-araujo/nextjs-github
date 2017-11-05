import {
    arrayOf,
    string,
    shape,
    number,
} from 'prop-types';

import UserRepoItem from '../../elements/UserRepoItem';

import {
    Title,
    Sort,
} from './styles';

const UserRepos = ({
    data,
}) => {
    const sortedData = Array.isArray(data) ?
        data.sort((cur, next) =>
            next.stargazers_count - cur.stargazers_count,
        ) : [];
    return (
        <section>
            <Title>User repositories</Title>
            <Sort>Sort by: Starts | Name</Sort>
            <ul>
                {
                    sortedData.map(userRepo => (
                        <UserRepoItem
                            key={userRepo.id}
                            language={userRepo.language}
                            description={userRepo.description}
                            stars={userRepo.stargazers_count}
                            title={userRepo.name}
                            githubUrl={userRepo.html_url}
                        />
                    ))
                }
            </ul>
        </section>
    );
};


UserRepos.defaultProps = {
    data: [],
};

UserRepos.propTypes = {
    data: arrayOf(shape({
        id: number,
        language: string,
        stargazers_count: number,
        name: string,
        html_url: string,
    })).isRequired,
};

export default UserRepos;
