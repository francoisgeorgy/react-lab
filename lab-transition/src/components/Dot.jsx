import React, { Component } from 'react';
//import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';


class Dot extends Component {

    render() {
        return (
            <circle cx={this.props.cx} cy={this.props.cy} r="5" />
        );
    }

}

export default Dot;
