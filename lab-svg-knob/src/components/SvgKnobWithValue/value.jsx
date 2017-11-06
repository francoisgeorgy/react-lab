import React, { Component } from 'react';

class Value extends Component {

    constructor(props) {
        super(props);
        console.log('Value constructor', props);
        // this.state = {
        //    value: props.value
        // };
    }

    // componentDidMount() {
    // }

    // componentWillReceiveProps() {
    //     console.log('Value componentWillReceiveProps');
    // }

    render() {
        const v = this.props.value;
        console.log('Value render', v);
        return (
            <div className="value">{v}</div>
        );
    }
}

export default Value;