import React, { Component } from 'react';

class Value extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="value">{this.props.value}</div>
        );
    }
}

export default Value;