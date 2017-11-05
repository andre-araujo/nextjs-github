import Router from 'next/router';
import { Box } from 'grid-styled';

import {
    Wrapper,
    Logo,
} from './styles';

import MainLayout from '../layouts/Main';
import SearchForm from '../components/modules/SearchForm';

export default () => (
    <div>
        <MainLayout title=" - Home">
            <Wrapper>
                <Box my="3rem">
                    <Box
                        width="30%"
                        mx="auto"
                    >
                        <Logo
                            alt="github logo"
                            src="static/images/github-logo.svg"
                        />
                    </Box>
                    <SearchForm
                        onSubmit={({ user }) => {
                            Router.push(`/users?username=${user}`, `/users/${user}`);
                        }}
                    />
                </Box>
            </Wrapper>
        </MainLayout>
    </div>
);
