import React, {Component} from 'react';
// import { Transition } from 'react-transition-group';
// import { EXITED, ENTERED, ENTERING, EXITING } from 'react-transition-group/Transition';
import './App.css';
// import Dot from "./components/Dot";
import Svg from "./components/Svg";

class App extends Component {

    state = { animate: false };    // state for Transition 'in' prop

    handleToggle() {
        this.setState(({ animate }) => ({   // passing a function to avoid state merging
            animate: !animate
        }))
    }

    render() {
        const { animate } = this.state;
        return (
            <div>
                <button onClick={() => this.handleToggle()}>
                    Click to toggle
                </button>
                <div>
                    <Svg animate={animate} />
                </div>
            </div>
        )
    }

}

export default App;
