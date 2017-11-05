import Head from 'next/head';
import {
    Box,
    Flex,
} from 'grid-styled';

import MainLayout from './Main';
import Header from '../components/modules/Header';

export default ({
    children,
    title = '',
}) => (
    <div>
        <MainLayout title={title}>
            <Header />
            { children }
        </MainLayout>
    </div>
);

