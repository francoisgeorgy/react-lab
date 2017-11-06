import React, { Component } from 'react';
import SvgKnob from '../../../node_modules/svg-knob';

class Knob extends Component {

    constructor(props) {
        super(props);
        this.k = null;
    }

    componentDidMount() {
        this.k = new SvgKnob('#knob', { /* config... */ });
        // do additional config with:
        // k...
        // const value_elem = document.getElementById("value");
        // const knobs_elem = document.getElementsByClassName("knob");
        // this.k.addEventListener("change", function(event) {
        //     // Event.target: a reference to the object that dispatched the event. It is different from event.currentTarget
        //     //               when the event handler is called during the bubbling or capturing phase of the event.
        //     value_elem.innerText = `#${event.target.id}: ${event.detail}`;
        // });
    }

    render() {
        return (
            <svg id="knob" />
        );
    }
}

export default Knob;