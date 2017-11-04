import Router from 'next/router';

import MainLayout from '../layouts/Main';
import SearchForm from '../components/modules/SearchForm';

export default () => (
    <MainLayout title="- Home">
        <SearchForm
            onSubmit={({ user }) => {
                Router.push(`/users?username=${user}`, `/users/${user}`);
            }}
        />
    </MainLayout>
);
