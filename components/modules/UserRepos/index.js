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
                        description={userRepo.description}
                        fullname={userRepo.full_name}
                        githubUrl={userRepo.html_url}
                        language={userRepo.language}
                        stars={userRepo.stargazers_count}
                        title={userRepo.name}
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
        full_name: string.isRequired,
        html_url: string,
        id: number,
        language: string,
        name: string,
        stargazers_count: number,
    })).isRequired,
};

export default UserRepos;
