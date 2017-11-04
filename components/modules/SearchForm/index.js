import { Component } from 'react';

import Submit from '../../elements/Submit';
import TextInput from '../../elements/TextInput';

import {
    Form,
} from './styles';

class SearchForm extends Component {
    state = {}

    registerField = (proxyEvent) => {
        if (proxyEvent && proxyEvent.target) {
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

export default SearchForm;
