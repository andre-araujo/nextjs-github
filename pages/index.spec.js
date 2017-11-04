/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Index from './index';

describe('Index Page', () => {
    it('Should render without crashing', () => {
        shallow(<Index />);
    });
});
