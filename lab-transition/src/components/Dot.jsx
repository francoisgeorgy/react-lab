import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

/*
// A function child can be used instead of a React element.
// This function is called with the current transition status ('entering', 'entered', 'exiting', 'exited', 'unmounted'),
// which can used to apply context specific props to a component.
const Move = ({ in: inProp, dx }) => (
    <Transition in={inProp} timeout={0}>
        {(state) => (
            <div style={{
                ...defaultMoveStyle,
                transform: state==='entering' ? 'translateY(100px)' : 'translateY(0px)'
            }}>
                :-)
            </div>
        )}
    </Transition>
);
*/


// https://github.com/reactjs/react-transition-group/blob/master/src/Transition.js:

// here are 4 main states a Transition can be in:
// ENTERING
// ENTERED
// EXITING
// EXITED
// export const UNMOUNTED = 'unmounted';
// export const EXITED = 'exited';
// export const ENTERING = 'entering';
// export const ENTERED = 'entered';
// export const EXITING = 'exiting';

// TRANSITION STATE IS TOGGLED VIA THE IN PROP.

const duration = 1000;

class Dot extends Component {

    render() {

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

    };
}

export default Dot;
