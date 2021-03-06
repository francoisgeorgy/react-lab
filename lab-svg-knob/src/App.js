import React, {Component} from 'react';
import './App.css';
import SvgKnob from './components/SvgKnob';
import SvgKnobWithValue from "./components/SvgKnobWithValue/knob-value";
import SvgKnobWithValueSimplerSyntax from "./components/SvgKnobWithValueSimplerSyntax/";
import SliderContainer from "./components/SliderContainer/index";

// function K(props) {
//     return <h1>{props.cfg}</h1>;
// }

/*
function SvgWithoutXlink() {
    return (
        <svg width="100" height="100" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="30"/>
        </svg>
    );
}

function SvgWithXlink(props) {
    return (
        <svg
            width="400"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <style>
                { `.classA { fill:${props.fill} }` }
            </style>
            <defs>
                <g id="Port">
                    <circle style={{fill:'inherit'}} r="10"/>
                </g>
            </defs>
            <text y="15">black</text>
            <use x="70" y="10" xlinkHref="#Port" />
            <text y="35">{ props.fill }</text>
            <use x="70" y="30" xlinkHref="#Port" className="classA"/>
            <text y="55">blue</text>
            <use x="0" y="50" xlinkHref="#Port" style={{fill:'blue'}}/>
        </svg>
    );
}
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<SvgWithoutXlink />*/}
                {/*<SvgWithXlink fill="violet" />*/}
                <div>
                    Knob only;
                    <SvgKnob/>
                </div>
                <div>
                    Knob with value updated by knob's onChange event:
                    <SvgKnobWithValue/>
                </div>

                <div>
                    Like above, with simpler syntax:
                    <SvgKnobWithValueSimplerSyntax/>
                </div>

                <div>
                    SliderContainer:
                    <SliderContainer />
                </div>

            </div>
        );
    }
}

export default App;
