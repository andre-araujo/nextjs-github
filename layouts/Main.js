import Head from 'next/head';

export default ({
    children,
    title = '',
}) => (
    <div>
        <Head>
            <title>{ `NextJs Github ${title}` }</title>
        </Head>

        { children }
    </div>
);
