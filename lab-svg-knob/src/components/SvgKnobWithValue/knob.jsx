import React, { Component } from 'react';
import SvgKnob from '../../../node_modules/svg-knob';

class Knob extends Component {

    constructor(props) {
        super(props);
        console.log('Knob constructor', props);
        this.k = null;
        // this.props = props;
        this.change = props.c;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('Knob handleChange', this.props, this.change);
        if (this.change) {
            this.change(e);
        }
    }

    componentDidMount() {
        console.log('Knob componentDidMount'); //, this.nv, this.handleChange);
        // ref = {c => this.myDiv = c}

        // this.k = new SvgKnob('#knob', { /* config... */ });
        this.k = new SvgKnob(this.nv, { /* config... */ });
        // do additional config with:
        // k...

        this.nv.addEventListener("change", this.handleChange);
    }

    // Not really necessary, but will slightly improve the rendering performance.
    shouldComponentUpdate(nextProps, nextState) {
        if (this.k != null) {
            console.log('Knob shouldComponentUpdate false');
            return false;
        } else {
            console.log('Knob shouldComponentUpdate true');
            return true;
        }
    }

    render() {
        console.log('Knob render');
        return (
            <svg ref={elem => this.nv = elem} />
        );
    }
}

export default Knob;