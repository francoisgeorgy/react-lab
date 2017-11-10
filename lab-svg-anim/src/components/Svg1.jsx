import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

class Svg1 extends Component {

/*
    handleChange = e => {
        if (this.props.onChange) this.props.onChange(e);
    };
*/

    componentDidMount() {
        // this.dom.addEventListener("change", this.handleChange);
    }

    // Not really necessary, but will slightly improve the rendering performance.
    shouldComponentUpdate() {
        // return this.k === null;
        return false;
    }

    render() {
        return (
            <svg ref={elem => this.dom = elem} height="100%" viewBox="0 0 100 100">
                <path d="M10,10 h80 M10,20 h80 M10,30 h80" stroke="#888" stroke-width="1" />
                <circle cx="20" cy="10" r="3" className={classnames('A1', this.props.styleName)} />
                <circle cx="20" cy="20" r="3" className="A2" />
                <circle cx="20" cy="30" r="3" className="A3"/>
            </svg>
        );
    }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
// Svg1.propTypes = {
//     onChange: PropTypes.func    // optional
// };

export default Svg1;
