## Animate SVG.

Use _[Refs](https://reactjs.org/docs/refs-and-the-dom.html)_ .

> React supports a special attribute that you can attach to any component. 
> The ref attribute takes a callback function, and 
> the callback will be executed immediately after the component is mounted or unmounted.

Justification:

> __When to Use Refs__
> There are a few good use cases for refs:
> - Managing focus, text selection, or media playback.
> - __Triggering imperative animations__.
> - Integrating with third-party DOM libraries.
> Avoid using refs for anything that can be done declaratively.

### Trigger animation from the parent

https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components

> we recommend exposing a special prop on the child

### Dynamically changing class name

https://www.npmjs.com/package/classnames

