import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  let isLogin = false

  /** If javascript puro */
  // if(isLogin) {
  //   return <Dashboard />
  // } else {
  //   return <Login />
  // }

  return (
    <>  
      {/* Ternary  */}
      {isLogin ? <Dashboard /> : <Login />} 
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
