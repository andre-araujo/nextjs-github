import React from 'react';
import { mount } from 'enzyme';

import SearchForm from './index';

describe('SearchForm component', () => {
    it('should match snapshot', () => {
        expect(mount(
            <SearchForm
                onSubmit={() => {}}
            />,
        )).toMatchSnapshot();
    });

    it('should call onSubmit prop with input value', () => {
        const onSubmit = jest.fn();
        const searchForm = mount(
            <SearchForm
                onSubmit={onSubmit}
            />,
        );

        searchForm
            .find('input[name="user"]')
            .simulate('change', { target: { name: 'user', value: 'test' } });

        searchForm
            .find('form')
            .simulate('submit');

        expect(onSubmit).toHaveBeenCalledWith({ user: 'test' });
    });

    it('should return empty value onSubmit if input has no name', () => {
        const onSubmit = jest.fn();
        const searchForm = mount(
            <SearchForm
                onSubmit={onSubmit}
            />,
        );

        searchForm
            .find('input[name="user"]')
            .simulate('change', { target: { value: 'test' } });

        searchForm
            .find('form')
            .simulate('submit');

        expect(onSubmit).toHaveBeenCalledWith({});
    });
});
