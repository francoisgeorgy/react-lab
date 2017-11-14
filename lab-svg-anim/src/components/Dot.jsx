import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Dot extends Component {

    render() {
        return (
        <circle cx={this.props.cx} cy={this.props.cy} r="3" className={classnames(this.props.name, {anim: this.props.animate})} />);
    }

/*
    render() {
        let fill = this.props.fill;
        let cx = this.props.cx;
        let cy = this.props.cy;
        let dx = this.props.dx;
        let dy = this.props.dy;
        let animate = (dx !== 0) || (dy !== 0);
        let style = animate ? `transform: translateX(${dx}px); transition: transform 2s ease-in-out;` : '';
        //  dot.setAttribute("style", `transform: translateX(${dx}px); transition: transform 2s ease-in-out;`);

        return (
            <circle ref={elem => this.dom = elem} cx={cx} cy={cy} r="5" fill={fill} style={style} />
        );

        // return (<circle ref={elem => this.dom = elem} cx={cx} cy={cy} r="5" />);
    }
*/
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
Dot.propTypes = {
    name: PropTypes.string,
    animate: PropTypes.bool
};

export default Dot;
