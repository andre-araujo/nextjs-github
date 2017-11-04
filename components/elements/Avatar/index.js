import {
    Wrapper,
    Image,
} from './styles';

export default ({
    url,
}) => (
    <Wrapper>
        <Image
            alt="user avatar"
            src={url}
        />
    </Wrapper>
);
