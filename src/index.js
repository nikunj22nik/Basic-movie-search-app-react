import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import './index.css';
import App from './components/App';
import rootReducer from "./reducer";

//  console.log(store);
  // console.log("before state",store.getState());
  // store.dispatch({
  //   type:"Add_movies",
  //   movies:[{name:'superman'}]
  // });
  // console.log("after state",store.getState());

const thunk=({dispatch,getState}) =>(next) =>(action) =>{
  if(typeof action === 'function'){
    console.log("action in a thuk");
    action(dispatch);
    return;
  }
  next(action);
}


  const store=createStore(rootReducer,applyMiddleware(thunk));
  ReactDOM.render(
    <App store={store} />, document.getElementById('root')
);


















































