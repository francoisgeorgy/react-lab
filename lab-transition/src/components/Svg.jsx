import React, { Component } from 'react';
import Dot from './Dot.jsx';


class Svg extends Component {

    render() {
        return (
            <svg ref={elem => this.dom = elem} height="100%" viewBox="0 0 100 100">
                <path d="M10,10 h80 M10,20 h80 M10,30 h80" stroke="#888" strokeWidth="1" />
                <Dot cx="10" cy="10" name="A" />
                {/*<Dot cx="20" cy="10" name="A" animate={this.props.animate && this.props.animate.includes('A')} />*/}
                {/*<Dot cx="20" cy="20" name="B" animate={this.props.animate && this.props.animate.includes('B')} />*/}
                {/*<Dot cx="20" cy="30" name="C" animate={this.props.animate && this.props.animate.includes('C')} />*/}
            </svg>
        );
    }
}

export default Svg;
