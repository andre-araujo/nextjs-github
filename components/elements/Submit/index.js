import React from 'react';
import { node } from 'prop-types';

import Button from './styles';

function Submit({
    children,
}) {
    return (
        <Button
            type="submit"
            value={children}
        />
    );
}

Submit.defaultProps = {
    children: 'Submit',
};

Submit.propTypes = {
    children: node,
};

export default Submit;
