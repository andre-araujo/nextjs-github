import React from 'react';
import { mount } from 'enzyme';

import UserInfo from './index';

describe('UserInfo component', () => {
    it('should match snapshot with all user data', () => {
        expect(mount(
            <UserInfo
                data={{
                    avatar_url: 'avatar_url',
                    login: 'login',
                    html_url: 'html_url',
                    followers: 34,
                    following: 23,
                    bio: 'bio',
                    email: 'email',
                }}
            />,
        )).toMatchSnapshot();
    });
});
