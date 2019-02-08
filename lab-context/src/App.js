import React, {useContext, Component} from 'react';
import './App.css';
import {MyContext, MyContextProvider} from "./components/MyContextProvider";

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const Context1 = React.createContext({
    attrString: 'attribute 1 (default)',
    attrArray: [
        'item 1 (default)', 'item 2 (default)'
    ],
    attrObject: {
        prop1: 'prop 1 (default)',
        prop2: ['A (default)', 'B (default)']
    }
});

class App extends Component {
    render() {
        return (
            <MyContextProvider>
            <div>
                <Context1.Provider value={{
                    attrString: 'attribute 1',
                    attrArray: [
                        'item 1', 'item 2'
                    ],
                    attrObject: {
                        prop1: 'prop 1',
                        prop2: ['A', 'B']
                    }
                }}>
                    <CompWrap/>
                </Context1.Provider>
                {/*<Context1.Provider value={"a"}>*/}
                    <CompWrap/>
                {/*</Context1.Provider>*/}
                <CompCtx1 />
                <CompCtx2 />
            </div>
            </MyContextProvider>
        );
    }
}


function CompCtx1() {
    const contextValue = useContext(MyContext);
    console.log("CompCtx1, contextValue=", contextValue);
    return <div>CompCtx1<pre>{contextValue}</pre></div>;
}

function CompCtx2() {
    const contextValue = useContext(MyContext);
    console.log("CompCtx2, contextValue=", contextValue);
    return <div>CompCtx2<pre>{contextValue}</pre></div>;
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function CompWrap(props) {
    return (
        <div>
            <CompContext1/>
        </div>
    );
}

class CompContext1 extends React.Component {

    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = Context1;  // https://reactjs.org/docs/context.html#classcontexttype

    render() {

        return (
                <div>
                    CompContext1
                    <pre>context is {JSON.stringify(this.context, null, 4)}</pre>
                    <CompCtx2/>
                </div>
        );
    }
}

export default App;
