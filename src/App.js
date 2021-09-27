import React, { useState,useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';


function App() {
  const [{basket},dispatch]=useStateValue();
  //  USeEffect <<<<<<<< PowerFul
  // Piece of code which runs based on a given COndition
  useEffect(() => {
     const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
// The User Logged In........
dispatch({
  type:"SET_USER",
  user:authUser
})
 }
 else{
  //  The USer is Logged out......
  dispatch({
    type:"SET_USER",
  user:null,
  })
 }
    })
    return ()=>{
      
      unsubscribe();
    }
   
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
          <CheckOut/>
          </Route>
         
          <Route path="/login">
     <Login/> 
          </Route>
          <Route path="/">
          <Header/>
         <Home/>
          </Route>
        </Switch>
        </div> 
  
    </Router>
   
  );
}

export default App;
