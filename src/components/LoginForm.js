import * as React from "react";
import Box from "@material-ui/core/Box";
import { TextField, Button, Typography } from "@material-ui/core";

const LoginForm = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        bgcolor: "primary.dark",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">Login</Typography>
      <TextField
        id="outlined-basic"
        label="Correo"
        variant="outlined"
        type="email"
        sx={{m:1}}
      />
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        type="password"
        sx={{m:1}}
      />
      <Button variant="contained">ENTRAR</Button>
    </Box>
  );
};

export default LoginForm;
