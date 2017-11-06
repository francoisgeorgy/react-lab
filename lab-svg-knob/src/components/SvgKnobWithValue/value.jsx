import React, { Component } from 'react';

class Value extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div class="value">{this.state.value}</div>
        );
    }
}

export default Value;