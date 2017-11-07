import React from 'react';
import { mount } from 'enzyme';

import Header from './index';

import { Anchor } from './styles';

describe('Header component', () => {
    let routerMock;

    beforeEach(() => {
        routerMock = {
            back: jest.fn(),
        };
    });

    it('should match snapshot with Unavaliable description', () => {
        expect(mount(
            <Header
                router={routerMock}
            />,
        )).toMatchSnapshot();
    });

    it('should trigger back router method', () => {
        const header = mount(
            <Header
                router={routerMock}
            />,
        );

        header
            .find(Anchor)
            .simulate('click');

        expect(routerMock.back).toHaveBeenCalled();
    });
});
