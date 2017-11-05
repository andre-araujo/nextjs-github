import Link from 'next/link';
import { withRouter } from 'next/router';

import {
    Wrapper,
    Label,
    Option,
    Anchor,
} from './styles';

const Sort = ({ router }) => {
    const sortBy = ['stars', 'forks', 'updated'];

    return (
        <Wrapper>
            <Label>Sort by:</Label>

            <ul>
                {
                    sortBy.map(sort => (
                        <Option
                            key={sort}
                            active={router.query.sort === `repos-by-${sort}`}
                        >
                            <Link
                                href={`/users?username=${router.query.username}&sort=repos-by-${sort}`}
                                as={`/users/${router.query.username}/repos-by-${sort}`}
                            >
                                <Anchor>{ sort }</Anchor>
                            </Link>
                        </Option>
                    ))
                }
            </ul>

        </Wrapper>
    );
};


export default withRouter(Sort);
