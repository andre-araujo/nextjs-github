import Router from 'next/router';
import { Box } from 'grid-styled';


import MainLayout from '../layouts/Main';
import SearchForm from '../components/modules/SearchForm';

export default () => (
    <div>
        <MainLayout title=" - Home">
            <Box
                width="30%"
                mx="auto"
            >
                <img
                    width="100%"
                    alt="github logo"
                    src="static/images/github-logo.svg"
                />
            </Box>
            <SearchForm
                onSubmit={({ user }) => {
                    Router.push(`/users?username=${user}`, `/users/${user}`);
                }}
            />

        </MainLayout>
    </div>
);
