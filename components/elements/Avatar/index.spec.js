import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './index';

describe('Avatar component', () => {
    it('should match snapshot with url as something', () => {
        expect(shallow(
            <Avatar url="something" />,
        )).toMatchSnapshot();
    });

    it('should match snapshot with url as testing', () => {
        expect(shallow(
            <Avatar url="testing" />,
        )).toMatchSnapshot();
    });
});
