import React from 'react';
import {
    mount,
} from 'enzyme';

import TextInput from './index';
import { Field } from './styles';

describe('TextInput component', () => {
    let props;

    beforeEach(() => {
        props = {
            name: 'nameMock',
            label: 'labelMock',
            onChange: jest.fn(),
        };
    });

    it('should match snapshot', () => {
        expect(mount(
            <TextInput {...props} />,
        )).toMatchSnapshot();
    });

    it('should call onChange function', () => {
        const Input = mount(
            <TextInput {...props} />,
        );

        Input
            .find(Field)
            .simulate('change', { target: { value: 'test' } });

        expect(props.onChange).toHaveBeenCalled();
    });
});
