// import React from 'react'
import "./login.css";

// export default function Login() {
//   return (
//     <div>Login</div>
//   )
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";

export default function Login() {
  return (
    <div>
      <div className="containerLogin"
        sx={{ minWidth: 275, height: 396, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
            Devstragram
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <label className="label-correo" htmlFor="username">Username</label>
                <input className="input-correo" placeholder="Correo electronico"></input>
                <input className="input-password" type="password" placeholder="Contraseña"></input>
              </div>
              <div className="div-login">
                <Button className="btnLogin">Login</Button>
              </div>
            </form>
          </Typography>
        </CardContent>
      </div>

      <div
        className="containerRegister"
        size="small"
        sx={{ minWidth: 275, height: 63, width: 350 }}
      >
        <Typography
          className="labelRegistro"
          variant="body2"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          <label size="small">¿No tienes una cuenta?</label>
        </Typography>
        <CardActions className="btnRegister">
          {/* <div className="containerLabel-Resgistro"> */}
            {/* <div className="" maxWidth="50%"></div>
            <div className="" maxWidth="50%">
              {" "}
            </div> */}
            <Button className="btnRegister" size="small">
              Registrate
            </Button>
          {/* </div> */}
        </CardActions>
      </div>
    </div>
  );
}
