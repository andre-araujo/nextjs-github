import React from 'react';
import { shallow } from 'enzyme';

import UserRepoItem from './index';

describe('UserRepoItem component', () => {
    let props;

    beforeEach(() => {
        props = {
            description: 'description',
            githubUrl: 'githubUrl',
            stars: 321,
            title: 'title',
            fullname: 'some/name',
        };
    });

    it('should match snapshot with Unavaliable description', () => {
        expect(shallow(
            <UserRepoItem
                {...props}
            />,
        )).toMatchSnapshot();
    });
});
