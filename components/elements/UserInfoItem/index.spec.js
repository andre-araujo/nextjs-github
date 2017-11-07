import React from 'react';
import { shallow } from 'enzyme';

import UserInfoItem from './index';

describe('UserInfoItem component', () => {
    it('should match snapshot with Unavaliable description', () => {
        expect(shallow(
            <UserInfoItem
                title="title"
            />,
        )).toMatchSnapshot();
    });

    it('should match snapshot with description', () => {
        expect(shallow(
            <UserInfoItem
                title="title"
                description="description"
            />,
        )).toMatchSnapshot();
    });

    it('should match snapshot with link on description', () => {
        expect(shallow(
            <UserInfoItem
                title="title"
                description="description"
                url="some_link"
            />,
        )).toMatchSnapshot();
    });
});
