import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import  Application, {default.X} from './components/app';
// import  * as x from './components/app';
// import reducers from './reducers';
// import * as c from './x';
import App from './components/app';
// console.log(c.number)
// console.log(c.incr());
// console.log(c);
// console.log(c.number)

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// console.log('App', x);
ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
  , document.querySelector('.container'));
