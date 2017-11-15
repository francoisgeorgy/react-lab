import React, { Component } from 'react';
//import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

/*
class Dot extends Component {
    render() {
        return (
            <circle cx={this.props.cx} cy={this.props.cy} r="5" />
        );
    }
}
*/

const duration = 1000;

class Dot extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log('Move constructor', props);
    // }

    // <circle cx={this.props.cx} cy={this.props.cy} r="5" style={{ ...defaultMoveStyle, transform: 'translateX('+ dx +')' }} />

    render() {
        console.log('render Dot', this.props);

        // let duration = this.props.duration;

        const defaultMoveStyle = {
            width: '50px',
            // transition: `transform ${duration}ms ease-in-out`,
            transition: `transform ${duration}ms ease-in-out`,
            // transform: 'translateX(40px)',
            padding: 20,
            // display: 'inline-block',
            backgroundColor: '#8787d8'
        };

        const defaultDotStyle = {
            transition: `transform ${duration}ms ease-in-out`,
            opacity: '0.7',
            fill: 'red'
        };

        let dx = this.props.in ? `${this.props.dx}px` : '0px';

        return (
            <Transition in={this.props.in} timeout={0}>
                <circle cx={this.props.cx} cy={this.props.cy} r="5" style={{transform: 'translateX('+ dx +')', ...defaultDotStyle}} />
            </Transition>
        );
        /*
        if (this.props.in) {
            return (
                <Transition in={inProp} timeout={0}>
                    <div style={{ ...defaultMoveStyle, transform: 'translateY(100px)' }}>X {this.props.in ? 'in' : 'not in'}</div>
                </Transition>
            )
        } else {
            return (
                <div style={{ ...defaultMoveStyle, transform: 'translateY(0px)' }}>X {this.props.in ? 'in' : 'not'}</div>
            )
        }
        */
    };
}

export default Dot;
