import { string } from 'prop-types';

import {
    Wrapper,
    Image,
} from './styles';

const Avatar = ({
    url,
}) => (
    <Wrapper>
        <Image
            alt="user avatar"
            src={url}
        />
    </Wrapper>
);

Avatar.propTypes = {
    url: string.isRequired,
};

export default Avatar;
