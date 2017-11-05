import Link from 'next/link';
import { Box } from 'grid-styled';

import {
    Header,
    Wrapper,
    HeaderContent,
    Anchor,
} from './styles';

export default () => (
    <Wrapper>
        <Header>
            <HeaderContent>
                <Box
                    width={[1, '40rem', '50rem', '60rem']}
                    mx="auto"
                >
                    <Link href="/">
                        <Anchor>
                            ◀ Search
                        </Anchor>
                    </Link>
                </Box>
            </HeaderContent>
        </Header>
    </Wrapper>
);
