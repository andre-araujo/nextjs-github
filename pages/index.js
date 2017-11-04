import MainLayout from '../layouts/Main';
import SearchForm from '../components/modules/SearchForm';

export default () => (
    <MainLayout title="- Home">
        <SearchForm onSubmit={values => console.log('values', values)} />
    </MainLayout>
);
