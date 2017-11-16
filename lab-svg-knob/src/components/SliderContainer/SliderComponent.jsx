import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgSlider from 'svg-slider';

class SliderComponent extends Component {

    // Using the new class-field syntax (https://github.com/tc39/proposal-class-fields):
    handleChange = e => {
        if (this.props.onChange) this.props.onChange(e);
    };

    componentDidMount() {
        this.k = new SvgSlider(this.dom);
        this.dom.addEventListener("change", this.handleChange);
    }

    // Not really necessary, but will slightly improve the rendering performance.
    shouldComponentUpdate() {
        return this.k === null;
    }

    render() {
        return (
            <svg ref={elem => this.dom = elem} />
        );
    }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
SliderComponent.propTypes = {
    onChange: PropTypes.func    // optional
};

export default SliderComponent;