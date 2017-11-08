import { Component } from 'react';

import Router from 'next/router';
import Wrapper from './styles';

class Loading extends Component {
    state = {
        isActive: false,
    }

    componentDidMount() {
        Router.onRouteChangeStart = () => this.setState({ isActive: true });
        Router.onRouteChangeComplete = () => this.setState({ isActive: false });
        Router.onRouteChangeError = () => this.setState({ isActive: false });
    }

    render() {
        return (
            <Wrapper active={this.state.isActive}>
                <span />
                <span />
                <span />
            </Wrapper>
        );
    }
}

export default Loading;
