import Link from 'next/link';
import {
    Box,
    Flex,
} from 'grid-styled';
import {
    number,
    string,
} from 'prop-types';

import {
    Anchor,
    Description,
    Language,
    Starts,
    Title,
    Wrapper,
} from './styles';

const UserRepoItem = ({
    description,
    fullname,
    githubUrl,
    language,
    stars,
    title,
}) => {
    const splitedRepoFullName = fullname.split('/');
    const repoOwner = splitedRepoFullName[0];
    const repoName = splitedRepoFullName[1];

    return (
        <Wrapper>
            <Box mb="1rem">
                <Link
                    href={`/repos?username=${repoOwner}&reponame=${repoName}`}
                    as={`/repos/${repoOwner}/${repoName}`}
                >
                    <Anchor>
                        <Title>
                            {title}
                        </Title>
                    </Anchor>
                </Link>
                <Anchor target="_blank" href={githubUrl}>
                    <img
                        width="15"
                        alt="github logo"
                        src="/static/images/github-logo.svg"
                    />
                </Anchor>
            </Box>
            <Description>{description}</Description>
            <Flex>
                <Starts>★ {stars}</Starts>
                <Language>{language}</Language>
            </Flex>
        </Wrapper>
    );
};

UserRepoItem.defaultProps = {
    description: null,
    githubUrl: null,
    stars: null,
    title: null,
};

UserRepoItem.propTypes = {
    description: string,
    githubUrl: string,
    stars: number,
    title: string.isRequired,
};

export default UserRepoItem;
