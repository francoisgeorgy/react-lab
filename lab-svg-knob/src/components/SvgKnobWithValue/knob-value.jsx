import React, { Component } from 'react';
import Knob from './knob';
import Value from './value';

class SvgKnobWithValue extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 0 };
    }

    handleChange(e) {
        this.setState({value: e.detail});
    }

    render() {
        return (
            <div className="knob">
                <Knob onChange={this.handleChange} />
                <Value value={this.state.value} />
            </div>
        );
    }
}

export default SvgKnobWithValue;