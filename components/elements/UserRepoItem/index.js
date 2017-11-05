import {
    Flex,
    Box,
} from 'grid-styled';
import {
    number,
    string,
} from 'prop-types';

import {
    Anchor,
    Wrapper,
    Title,
    Starts,
    Language,
    Description,
} from './styles';

const UserRepoItem = ({
    language,
    stars,
    title,
    description,
    githubUrl,
}) => (
    <Wrapper>
        <Box mb="1em">
            <Anchor target="_blank" href={githubUrl}>
                <Title>
                    {title}
                    <img
                        width="15"
                        alt="github logo"
                        src="/static/images/github-logo.svg"
                    />
                </Title>
            </Anchor>
        </Box>
        <Description>{description}</Description>
        <Flex>
            <Starts>★ {stars}</Starts>
            <Language>{language}</Language>
        </Flex>
    </Wrapper>
);

UserRepoItem.defaultProps = {
    title: null,
    stars: null,
    description: null,
    githubUrl: null,
};

UserRepoItem.propTypes = {
    title: string.isRequired,
    stars: number,
    description: string,
    githubUrl: string,
};

export default UserRepoItem;
