import {
    number,
    shape,
    string,
} from 'prop-types';

import { Box } from 'grid-styled';

import {
    Description,
    Label,
    Title,
} from './styles';

const RepoDetails = ({
    data,
}) => {
    const infoToDisplay = [
        'full_name',
        'forks',
        'language',
        'name',
        'open_issues',
        'stargazers_count',
        'subscribers_count',
        'homepage',
        'html_url',
    ];

    return (
        <section>
            <Title>{data.name}</Title>
            {
                infoToDisplay
                    .filter(info => data[info])
                    .map(info => (
                        <Box my="2rem" key={info}>
                            <Label>{info.replace('_', ' ')}</Label>

                            <Description>
                                {
                                    (/http/).test(data[info]) ?
                                        <a
                                            target="_blank"
                                            href={data[info]}
                                        >
                                            {data[info]}
                                        </a> :
                                        data[info]
                                }

                            </Description>
                        </Box>
                    ))
            }
        </section>
    );
};


RepoDetails.defaultProps = {
    data: {},
};

RepoDetails.propTypes = {
    data: shape({
        forks: number,
        full_name: string,
        homepage: string,
        html_url: string,
        language: string,
        name: string,
        open_issues: number,
        stargazers_count: number,
        subscribers_count: number,
    }).isRequired,
};

export default RepoDetails;
