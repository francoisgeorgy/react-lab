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

    }

    // Your component has now been rendered and exists in the DOM. This is the point when you should initiate
    // AJAX requests, add event listeners, and perform any set up that requires a DOM.
    // Calling setState during this method or any time after will cause a re-render.
    componentDidMount() {
        this.k = new Knob('#knob', { /* config... */ });
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

    // componentWillReceiveProps
    // When your component receives new props from its parent, componentWillReceiveProps(nextProps) is triggered.
    // This is a great time to check if there are changes in the incoming props when compared to your current props
    // and trigger a state change based on the new values. A common use-case for this is resetting state based on a change.

    // componentDidUpdate
    // Immediately after React builds you a shiny new UI, componentDidUpdate(prevProps, prevState) is invoked.
    // This is a great time to interact with the DOM or instantiate a new network request based on what the new
    // interface should look like.

    render() {
        return (
            <div class="knob">
                <svg id="knob"/>
                {/*<div class="value" id="value"/>*/}
            </div>
        );
    }
}

export default SvgKnob;