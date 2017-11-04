import { Component } from 'react';

import Submit from '../../elements/Submit';

class SearchForm extends Component {
    inputs = {}

    registerField = (inputElement) => {
        this.inputs[inputElement.name] = inputElement.value;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.inputs);
    }

    render() {
        return (
            <form name="search-form" onSubmit={this.handleSubmit}>
                <div>
                    <input
                        defaultValue="andre-araujo"
                        ref={this.registerField}
                        name="user"
                        type="text"
                    />
                </div>
                <Submit>
                    Buscar
                </Submit>
            </form>
        );
    }
}

export default SearchForm;
