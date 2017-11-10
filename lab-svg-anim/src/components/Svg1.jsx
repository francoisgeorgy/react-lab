import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dot from './Dot.jsx';


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
    /*
    shouldComponentUpdate() {
        // return this.k === null;
        return false;
    }
    */

    //TODO: pass a code to animate that tells how many pixel and which direction to go --> css class naming convention
    //TODO: or do not use a class but add the css animation as inline style property? --> https://css-tricks.com/animate-to-an-inline-style/

    render() {
        console.log('Svg1', this.props.animate, this.props.animate.includes("A"), typeof this.props.animate);
        return (
            <svg ref={elem => this.dom = elem} height="100%" viewBox="0 0 100 100">
                <path d="M10,10 h80 M10,20 h80 M10,30 h80" stroke="#888" strokeWidth="1" />
                <Dot cx="20" cy="10" name="A" animate={this.props.animate && this.props.animate.includes('A')} />
                <Dot cx="20" cy="20" name="B" animate={this.props.animate && this.props.animate.includes('B')} />
                <Dot cx="20" cy="30" name="C" animate={this.props.animate && this.props.animate.includes('C')} />
{/*
                <circle cx="20" cy="10" r="3" className={classnames('A', {anim: this.props.animate && this.props.animate.includes('A')})} />
                <circle cx="20" cy="20" r="3" className={classnames('B', {anim: this.props.animate && this.props.animate.includes('B')})} />
                <circle cx="20" cy="30" r="3" className={classnames('C', {anim: this.props.animate && this.props.animate.includes('C')})} />
*/}
                {/*<circle cx="20" cy="10" r="3" className="A" />*/}
            </svg>
        );
    }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
// Svg1.propTypes = {
//     onChange: PropTypes.func    // optional
// };

export default Svg1;
