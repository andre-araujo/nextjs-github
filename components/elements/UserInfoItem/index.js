import {
    oneOfType,
    number,
    string,
} from 'prop-types';

import {
    Wrapper,
    Title,
    Description,
} from './styles';

const UserInfoItem = ({
    title,
    description,
    url,
}) => (
    <Wrapper>
        <Title>{title}</Title>
        <Description>
            {
                url &&
                <a href={url} target="_blank">{ description }</a>
            }

            {
                !url && (description || 'Unavaliable')
            }
        </Description>
    </Wrapper>
);

UserInfoItem.defaultProps = {
    title: null,
    description: null,
    url: null,
};

UserInfoItem.propTypes = {
    title: string.isRequired,
    description: oneOfType([
        number,
        string,
    ]),
    url: string,
};

export default UserInfoItem;
