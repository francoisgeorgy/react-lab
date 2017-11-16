import React, { Component } from 'react';
import SliderComponent from "./SliderComponent";

function Value(props) {
    return <div className="value">{props.value}</div>;
}

class SliderContainer extends Component {

    state = { value: 0 };

    // Using the new class-field syntax (https://github.com/tc39/proposal-class-fields):
    handleChange = e => this.setState({value: e.detail});

    render() {
        return (
            <div className="slider">
                <SliderComponent onChange={this.handleChange} />
                <Value value={this.state.value} />
            </div>
        );
    }
}

export default SliderContainer