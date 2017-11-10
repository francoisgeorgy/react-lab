import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Dot extends Component {

    render() {
        return (
        <circle cx={this.props.cx} cy={this.props.cy} r="3" className={classnames(this.props.name, {anim: this.props.animate})} />);
    }

}

// https://reactjs.org/docs/typechecking-with-proptypes.html
Dot.propTypes = {
    name: PropTypes.string,
    animate: PropTypes.bool
};

export default Dot;
