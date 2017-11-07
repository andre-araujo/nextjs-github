import React from 'react';
import { shallow } from 'enzyme';

import Submit from './index';

describe('Submit component', () => {
    it('should match snapshot with value as testing', () => {
        expect(shallow(
            <Submit>testing</Submit>,
        )).toMatchSnapshot();
    });

    it('should match snapshot with value as tests', () => {
        expect(shallow(
            <Submit>tests</Submit>,
        )).toMatchSnapshot();
    });
});
