
import PropTypes from 'prop-types';

import {
    Wrapper,
    Content,
    Label,
    Field,
} from './styles';

function TextInput({
    value,
    label,
    ...inputProps
}) {
    return (
        <Wrapper>
            <Content>
                <Field
                    {...inputProps}
                    id={inputProps.name}
                    type="text"
                    required
                    name={inputProps.name}
                />
                <Label htmlFor={inputProps.name}>
                    {label}
                </Label>
            </Content>
        </Wrapper>
    );
}

TextInput.defaultProps = {
    name: null,
    onChange: null,
    label: 'label',
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
