import React, { Component } from 'react';
import Knob from '../../../node_modules/svg-knob';

class SvgKnob extends Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);   // not necessary if the method does not reference 'this'.
    }

    handleChange(e) {
        console.log('handleChange', e);
    }

    componentDidMount() {
        this.k = new Knob(this.dom, { cursor: true, cursor_length: 16, cursor_width: 2, cursor_color: '#bbb' });
        // set initial value:
        this.k.value = 50;
        this.dom.addEventListener("change", this.handleChange);
    }

    render() {
        return (
            <div className="knob">
                {/*<svg id="knob" ref={elem => this.nv = elem}  />*/}
                <svg ref={elem => this.dom = elem} />
                {/*<div className="value" id="value"/>*/}
            </div>
        );
    }
}

export default SvgKnob;