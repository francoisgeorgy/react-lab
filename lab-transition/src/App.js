import React, {Component} from 'react';
import { Transition } from 'react-transition-group';
import { EXITED, ENTERED, ENTERING, EXITING } from 'react-transition-group/Transition';
import './App.css';
// import Svg from "./components/Svg";

const duration = 500;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    // transition: `opacity 0 ease-in-out`,
    opacity: 0,
    padding: 20,
    display: 'inline-block',
    backgroundColor: '#8787d8'
};

const transitionStyles = {
    ENTERING: { opacity: 0 },
    ENTERED: { opacity: 1 },
};


const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                I'm A fade Transition!
            </div>
        )}
    </Transition>
);


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

const defaultMoveStyle = {
    width: '50px',
    // transition: `transform ${duration}ms ease-in-out`,
    transition: `transform ${duration}ms ease-in-out`,
    // transform: 'translateX(40px)',
    padding: 20,
    // display: 'inline-block',
    backgroundColor: '#8787d8'
};

const transitionMoveStyles = {
    // ENTERING: { transform: 'translateX(0px)' },
    // ENTERED: { transform: 'translateX(100px)' }
    entering: { transform: 'translateX(0px)' },
    entered: { transform: 'translateX(100px)' }
};

/*
    state={in: false};
    toggleEnterState = () => {
        this.setState({ in: true });
    }
    render() {
        return (
            <div>
                <Transition in={this.state.in} timeout={500} />
                <button onClick={this.toggleEnterState}>Click to Enter</button>
            </div>
        );
    }
*/

// A function child can be used instead of a React element.
// This function is called with the current transition status ('entering', 'entered', 'exiting', 'exited', 'unmounted'),
// which can used to apply context specific props to a component.
/*
const Move = ({ in: inProp }) => (
    <Transition in={inProp} timeout={0}>
        {(state) => (
            <div style={{
                ...defaultMoveStyle,
                ...transitionMoveStyles[state]
            }}>
                :-)
            </div>
        )}
    </Transition>
);
*/
/*
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
class Move extends Component {
    constructor(props) {
        super(props);
        console.log('Move constructor', props);
    }
    render() {
        console.log('render Move', this.props);
        if (this.props.in) {
            return (
                <div style={{ ...defaultMoveStyle, transform: 'translateY(100px)' }}>X {this.props.in ? 'in' : 'not in'}</div>
            )
        } else {
            return (
                <div style={{ ...defaultMoveStyle, transform: 'translateY(0px)' }}>X {this.props.in ? 'in' : 'not'}</div>
            )
        }
    };
}

class App extends Component {

    state = { show: false };    // state for Transition 'in' prop

    handleToggle() {
        console.log('toggle');
        this.setState(({ show }) => ({
            show: !show
        }))
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <button onClick={() => this.handleToggle()}>
                    Click to toggle
                </button>
                <div>
                    <Move in={!!show} dx={50} />
                </div>
            </div>
        )
    }

/*
    state = { animate: [] };  // list of classes to animate

    animate = n => {
        console.log(n, this.state.animate);

        let m = n || [];
        if (!(m instanceof Array)) {
            m = [m];
        }

        let newAnimate = this.state.animate.slice();    // copy the array

        for (let i=0; i<m.length; i++) {
            if (!newAnimate.includes(m)) newAnimate.push(m[i]);
        }

        console.log(n, newAnimate);

        this.setState({animate: newAnimate});           // set the new state
    };

    reset = () => {
        this.setState({animate: []});
    };

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={() => this.animate('A')}>A</button>
                    <button onClick={this.reset}>reset</button>
                </div>
                <div className="diagram">
                    <Svg animate={this.state.animate} />
                </div>
            </div>
        );
    }
*/
}

export default App;
