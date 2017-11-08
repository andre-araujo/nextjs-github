import React from 'react';
import { shallow } from 'enzyme';

import Loading from './index';

describe('Loading component', () => {
    it('should match snapshot', () => {
        expect(shallow(
            <Loading />,
        )).toMatchSnapshot();
    });
});
