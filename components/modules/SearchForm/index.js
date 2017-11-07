import { Component } from 'react';
import { func } from 'prop-types';

import Submit from '../../elements/Submit';
import TextInput from '../../elements/TextInput';

import {
    Form,
} from './styles';

class SearchForm extends Component {
    state = {}

    registerField = (proxyEvent) => {
        if (proxyEvent && proxyEvent.target && proxyEvent.target.name) {
            this.setState({
                [proxyEvent.target.name]: proxyEvent.target.value,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Form
                name="search-form"
                onSubmit={this.handleSubmit}
            >
                <div>
                    <TextInput
                        name="user"
                        type="text"
                        onChange={this.registerField}
                    />
                </div>
                <Submit>
                    Buscar
                </Submit>
            </Form>
        );
    }
}

SearchForm.propTypes = {
    onSubmit: func.isRequired,
};

export default SearchForm;
