import React, { Component } from 'react';
import Knob from './knob';
import Value from './value';

class SvgKnobWithValue extends Component {

    constructor(props) {
        super(props);
        console.log('SvgKnobWithValue constructor', props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0   // knob value
        };
    }

    handleChange(e) {
        console.log('SvgKnobWithValue handleChange', e.detail);
        this.setState({value: e.detail});
        console.log('SvgKnobWithValue handleChange', this.state);
    }

    componentDidMount() {
        console.log('SvgKnobWithValue componentDidMount');
        // this.nv.addEventListener("change", this.handleChange);
    }

    render() {
        const v = this.state.value;
        console.log('SvgKnobWithValue render', v);
        return (
            <div className="knob">
                <Knob c={this.handleChange} />
                <Value value={v} />
            </div>
        );
    }
}

export default SvgKnobWithValue;