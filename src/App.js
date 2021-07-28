import "./App.css";
import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'

function App() {
  // let isLogin = true
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();


  const [isLogin, setIsLogin] = useState(false)
  console.log('isLogin: ',isLogin)
  // const [wellcomeMessage, setWellcomeMessage] = useState('Hello world')

  /** If javascript puro */
  // if(isLogin) {
  //   return <Dashboard />
  // } else {
  //   return <Login />
  // }

  return (
    <>  
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

      {/* Ternary  */}
      {/* {isLogin ? <Dashboard /> : <Login setIsLogin={setIsLogin}/>}  */}
    </>  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
