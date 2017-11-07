import React from 'react';
import { mount } from 'enzyme';

import RepoDetails from './index';

describe('RepoDetails component', () => {
    it('should match snapshot with only full_name content', () => {
        expect(mount(
            <RepoDetails
                data={{
                    full_name: 'full_name',
                }}
            />,
        )).toMatchSnapshot();
    });

    it('should match snapshot with all repo data', () => {
        expect(mount(
            <RepoDetails
                data={{
                    full_name: 'full_name',
                    forks: 2,
                    language: 'language',
                    name: 'name',
                    open_issues: 15,
                    stargazers_count: 515,
                    subscribers_count: 151,
                    homepage: 'homepage',
                    html_url: 'http',
                }}
            />,
        )).toMatchSnapshot();
    });
});
