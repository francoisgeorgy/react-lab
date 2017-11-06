import React, { Component } from 'react';
import Knob from '../../../node_modules/svg-knob';

class SvgKnob extends Component {

    // This method is called when your component is being created and before mounting (being added to the DOM).
    // Its primary use is to initialize state and .bind(this) for the component’s methods.
    // If you do neither of these, then there is no need for a constructor.
    constructor(props) {
        super(props);
        this.k = null;
        // this.handleClick = this.handleClick.bind(this);
        // this.state = {
        //     clicks: 0
        // };
        // this.handleChange = this.handleChange.bind(this);   // not necessary if the method does not reference 'this'.
    }

    handleChange(e) {
        console.log('handleChange', e);
    }

    // Your component has now been rendered and exists in the DOM. This is the point when you should initiate
    // AJAX requests, add event listeners, and perform any set up that requires a DOM.
    // Calling setState during this method or any time after will cause a re-render.
    componentDidMount() {
        // this.k = new Knob('#knob', { /* config... */ });
        this.k = new Knob(this.nv, { /* config... */ });
        // do additional config with:
        // k...
        this.nv.addEventListener("change", this.handleChange);
    }

    render() {
        return (
            <div className="knob">
                {/*<svg id="knob" ref={elem => this.nv = elem}  />*/}
                <svg ref={elem => this.nv = elem} />
                {/*<div className="value" id="value"/>*/}
            </div>
        );
    }
}

export default SvgKnob;