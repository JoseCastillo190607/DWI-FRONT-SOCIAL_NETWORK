import "./register.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Login() {
  return (
    <div>
      <Card
        className="containerLogin"
        sx={{ minWidth: 275, height: 580, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
            Devstragram
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <input
                  className="input-correo"
                  placeholder="Nombre"
                  type="text"
                />
                <input
                  className="input-password"
                  placeholder="Apellido Paterno"
                  type="text"
                />
                <input
                  className="input-correo"
                  placeholder="Apellido materno"
                  type="text"
                />
                <input
                  className="input-correo"
                  placeholder="Correo electronico"
                  type="email"
                />
                <input
                  className="input-correo"
                  placeholder="Contraseña"
                  type="password"
                />
                <input
                  className="input-correo"
                  placeholder="Fecha de nacimiento"
                  type="date"
                />
              </div>
              <div className="div-login">
                <Button className="btnLogin">Registrate</Button>
              </div>
            </form>
          </Typography>
        </CardContent>
      </Card>

      <Card
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
          <label size="small">¿Ya tienes una cuenta?</label>
        </Typography>
        <CardActions className="btnRegister">
          <Button className="btnRegister" size="small">
            Inicia Sesion
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
