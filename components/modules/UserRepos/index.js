import {
    arrayOf,
    string,
    shape,
    number,
} from 'prop-types';

import UserRepoItem from '../../elements/UserRepoItem';
import Sort from '../../elements/Sort';

import Title from './styles';

const UserRepos = ({
    data,
}) => (
    <section>
        <Title>User repositories</Title>
        <Sort />
        <ul>
            {
                data.map(userRepo => (
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
