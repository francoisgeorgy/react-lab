import React, { Component } from 'react';
import Knob from './knob';

function Value(props) {
    return <div className="value">{props.value}</div>;
}

class SvgKnobWithValueSimplerSyntax extends Component {

    state = { value: 0 };

    handleChange = e => this.setState({value: e.detail});

    render() {
        return (
            <div className="knob">
                <Knob onChange={this.handleChange} />
                <Value value={this.state.value} />
            </div>
        );
    }
}

export default SvgKnobWithValueSimplerSyntax;