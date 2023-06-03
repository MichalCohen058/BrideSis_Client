import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { userReducer } from './store/reducers/user';
import { managerReducer } from './store/reducers/manager';
import {  combineReducers } from 'redux';
import { createStore } from 'redux';

import ReactDOM from 'react-dom';

const store = createStore(combineReducers({ managerReducer: managerReducer,userReducer:userReducer}))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   {/* <Router> */}
   <App />
    {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
