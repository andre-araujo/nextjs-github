import Link from 'next/link';
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

const InfoListItem = ({
    title,
    description,
    url,
}) => (
    <Wrapper>
        <Title>{title}</Title>
        <Description>
            {
                url &&
                <Link href={url}>
                    <a>{ description }</a>
                </Link>
            }

            {
                !url && description
            }
        </Description>
    </Wrapper>
);

InfoListItem.defaultProps = {
    title: null,
    description: 'Unavaliable',
    url: null,
};

InfoListItem.propTypes = {
    title: string.isRequired,
    description: oneOfType([
        number,
        string,
    ]),
    url: string,
};

export default InfoListItem;
