
import PropTypes from 'prop-types';

import {
    Wrapper,
    Content,
    Label,
    Field,
} from './styles';

function TextInput({
    label,
    ...inputProps
}) {
    return (
        <Wrapper>
            <Content>
                <Field
                    {...inputProps}
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
