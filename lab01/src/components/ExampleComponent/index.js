import React, {Component} from 'react';

class ExampleComponent extends Component {

    // This method is called when your component is being created and before mounting (being added to the DOM).
    // Its primary use is to initialize state and .bind(this) for the component’s methods.
    // If you do neither of these, then there is no need for a constructor.
    constructor(props) {
        super(props);
        console.log('ExampleComponent.constructor');
        // this.handleClick = this.handleClick.bind(this);
        // this.state = {
        //     clicks: 0
        // };
    }

    // This method is executed right before a component is added to the DOM / render(). It is generally recommended
    // that you use the constructor, but this method is still included in the API mostly for backwards compatibility.
    // You should avoid calling any functions that cause side effects in this method as setState won’t trigger a change
    // and there is no DOM to interact with.
    // Note that this is also the only lifecycle method called on the server.
    componentWillMount() {
        console.log('ExampleComponent.componentWillMount');
    }

    // Your component has now been rendered and exists in the DOM. This is the point when you should initiate
    // AJAX requests, add event listeners, and perform any set up that requires a DOM.
    // Calling setState during this method or any time after will cause a re-render.
    componentDidMount() {
        console.log('ExampleComponent.componentDidMount');
    }

    // When your component receives new props from its parent, componentWillReceiveProps(nextProps) is triggered.
    // This is a great time to check if there are changes in the incoming props when compared to your current props
    // and trigger a state change based on the new values. A common use-case for this is resetting state based on a change.
    componentWillReceiveProps() {
        console.log('ExampleComponent.componentWillReceiveProps');
    }

    // This method exists purely for performance improvements. Renders and reconciliations are expensive in React.
    // shouldComponentUpdate(nextProps, nextState) provides the developer the ability to return a boolean true/false
    // from this method which controls whether React should perform the reconciliation operations and DOM updates.
    // The default behavior is for React to render every update, which works in most cases.
    // If shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will
    // not be invoked.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('ExampleComponent.shouldComponentUpdate');
        return true;
        // return this.props.clicks !== nextProps.clicks;
    }

    // React invokes this method immediately before rendering when new props or state are being received.
    // There is not much use for componentWillUpdate(nextProps, nextState) and should probably be avoided (similar to
    // componentWillMount). You should not do anything that would change the state at this point — 
    // use componentWillReceiveProps if you need to do anything before a render.
    // Note that this method is not called on the initial render.
    componentWillUpdate() {
        console.log('ExampleComponent.componentWillUpdate');
    }

    // Immediately after React builds you a shiny new UI, componentDidUpdate(prevProps, prevState) is invoked.
    // This is a great time to interact with the DOM or instantiate a new network request based on what the new
    // interface should look like.
    componentDidUpdate() {
        console.log('ExampleComponent.componentDidUpdate');
    }

    // Your component had a great life and now it’s time for it to leave the UI. This is the moment to clean up
    // everything that was associated with adding and maintaining your component while it was living on the UI.
    componentWillUnmount() {
        console.log('ExampleComponent.componentWillUnmount');
    }

    // componentDidCatch(error, info) is a new lifecycle that was added in React 16. React was notorious for crashing
    // the an entire application if a JavaScript error was thrown inside the React app. It corrupted React’s internal
    // state which blew up the app and yielded cryptic error messages. componentDidCatch solves this by catching any
    // JavaScript error occurring in a component’s tree for the children of the component that implements the method.
    // It is able to capture the error and display a fallback UI.
    componentDidCatch(error, info) {
        console.log('ExampleComponent.componentDidCatch');
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        console.log('ExampleComponent.render');
        return (
            <div>ExampleComponent</div>
        );
    }
}

export default ExampleComponent;