import {
    Box,
} from 'grid-styled';

import MainLayout from './Main';
import Header from '../components/modules/Header';

export default ({
    children,
    backUrl,
    title = '',
}) => (
    <div>
        <MainLayout title={title}>
            <Header backUrl={backUrl} />
            <Box
                width="90%"
                mx="auto"
            >
                { children }
            </Box>
        </MainLayout>
    </div>
);

