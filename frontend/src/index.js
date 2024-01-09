import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd';

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import Provider from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux'
import promiseMiddleware from 'redux-promise';
import { thunk } from 'redux-thunk';
// import Reducer from './_reducers';


//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

// const stroe = createStore(
//   Reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
  // <Provider store={ createStoreWithMiddleware(Reducer)}> 
  //   <App />
  // </Provider>
  <App/>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
