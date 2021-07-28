import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/quienessomos"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            <Button color="inherit">Quienes somos</Button>
          </Link>
          <Link
            to="/nuestrosclientes"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            <Button color="inherit">Nuestros clientes</Button>
          </Link>
          <Link
            to="/contacto"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            <Button color="inherit">Contacto</Button>
          </Link>
          <Link
            to="/soypro"
            style={{ color: "#FFF", textDecoration: "none" }}
          >
            <Button color="inherit">Soy PRO</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
