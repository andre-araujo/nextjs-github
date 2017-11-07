import React from 'react';
import { shallow } from 'enzyme';

import UserRepos from './index';

describe('UserRepos component', () => {
    it('should match snapshot with all user repo data', () => {
        expect(shallow(
            <UserRepos
                data={[
                    {
                        html_url: 'html_url',
                        id: 32,
                        language: 'language',
                        name: 'name',
                        stargazers_count: 43,
                        full_name: 'user/repo',
                    },
                ]}
            />,
        )).toMatchSnapshot();
    });
});
