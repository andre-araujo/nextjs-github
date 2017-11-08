import Head from 'next/head';
import {
    Box,
    Flex,
} from 'grid-styled';

import Loading from '../components/elements/Loading';

export default ({
    children,
    title = '',
}) => (
    <div>
        <Head>
            <title>{ `NextJs Github ${title}` }</title>
        </Head>

        <Flex
            width={[1, '40rem', '50rem', '60rem']}
            mx="auto"
        >
            <Box
                flex="1"
            >
                { children }
            </Box>
        </Flex>
        <Loading />
    </div>
);
