import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Main from '../pages/Dashboard/Main'
import NuestrosClientes from "../pages/Dashboard/NuestrosClientes";
import Contacto from "../pages/Dashboard/Contacto";
import QuienesSomos from "../pages/Dashboard/QuienesSomos";
import ButtonAppBar from "../components/AppBar";
import SoyPro from "../pages/Dashboard/SoyPro"

let pro = false;

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const { component } = props

    return (
        <Route {...rest}> { pro ? <Component /> : <Redirect to="/main" /> } </Route>
    )
}

const Routes = () => {
    return (
      <Router>
        <ButtonAppBar />
  
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quienessomos">
            <QuienesSomos />
          </Route>
          <Route path="/nuestrosclientes">
            <NuestrosClientes />
          </Route>
          <PrivateRoute exact path="/soypro" component={SoyPro} />
        </Switch>
      </Router>
    );
  };
  
  export default Routes;