import { withRouter } from 'next/router';
import { Box } from 'grid-styled';

import {
    Header,
    Wrapper,
    HeaderContent,
    Anchor,
} from './styles';

const InnerHeader = ({ router }) => (
    <Wrapper>
        <Header>
            <HeaderContent>
                <Box
                    width={[1, '40rem', '50rem', '60rem']}
                    mx="auto"
                >
                    <Anchor onClick={() => router.back()}>
                        ◀ Back
                    </Anchor>
                </Box>
            </HeaderContent>
        </Header>
    </Wrapper>
);

export default withRouter(InnerHeader);
