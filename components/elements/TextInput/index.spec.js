import React from 'react';
import {
    shallow,
    mount,
} from 'enzyme';

import TextInput from './index';

describe('TextInput component', () => {
    const props = {
        name: 'nameMock',
        label: 'labelMock',
        onChange: jest.fn(),
    };

    it('should render without crashing', () => {
        shallow(<TextInput {...props} />);
    });

    describe('should trigger onChange events', () => {
        const textInput = mount(<TextInput {...props} />);
        const input = textInput.find('input');

        it('should trigger onChange prop callback when value is changed', () => {
            input.simulate('change', {
                target: {
                    value: 'value',
                },
            });

            expect(props.onChange.mock.calls.length).toBeGreaterThanOrEqual(1);
        });
    });
});
