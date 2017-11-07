import React from 'react';
import { render } from 'enzyme';

import Sort from './index';

describe('Sort component', () => {
    it('should match snapshot', () => {
        const routerMock = {
            query: {
                sort: '',
                username: '',
            },
        };

        expect(render(
            <Sort router={routerMock} />,
        )).toMatchSnapshot();
    });
});
