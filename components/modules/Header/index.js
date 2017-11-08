import { withRouter } from 'next/router';
import { Box } from 'grid-styled';

import {
    Header,
    Wrapper,
    HeaderContent,
    Anchor,
} from './styles';

const InnerHeader = ({
    router,
    backUrl,
}) => (
    <Wrapper>
        <Header>
            <HeaderContent>
                <Box
                    width={[1, '40rem', '50rem', '60rem']}
                    mx="auto"
                >
                    <Anchor
                        onClick={() => {
                            if (backUrl) {
                                router.push(backUrl);
                            } else {
                                router.back();
                            }
                        }}
                    >
                        ◀ Back
                    </Anchor>
                </Box>
            </HeaderContent>
        </Header>
    </Wrapper>
);

export default withRouter(InnerHeader);
