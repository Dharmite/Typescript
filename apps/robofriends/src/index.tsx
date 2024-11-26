import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';


ReactDOM.render(
  <App />,
  // This syntax is called a type assertion, sometimes also called a cast.
  // This is a useful way of telling TypeScript what the real type of an
  // expression is when you know better than the type checker.
  document.getElementById('root') as HTMLElement
);
registerServiceWorker(); // This is a function that is called to register a service worker. It is a script that your browser runs in the background to cache and serve content offline. It is a progressive web app feature that allows your web app to be faster and more reliable
