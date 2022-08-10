import "./changePassword.css";
import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ChangePassword() {
  return (
    <div>
      <div
        className="containerPassword"
        sx={{ minWidth: 275, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
            {/* <span className="corazonContainer">
               <div className="like"></div> 
            </span> */}
            <div className="divDevs" width="50%">
            Cambiar contraseña
            </div>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <label>Ingresar contraseña actual</label>
                <br />
                <br />
                <input
                  className="input-password"
                  placeholder="Contraseña actual"
                //   onChange={(event) => {
                //     setEmail(event.target.value);
                //   }}
                >

                </input>
                <label>Ingresar nueva contraseña</label>
                <br />
                <br />
                <input
                  className="input-password"
                  placeholder="Nueva contraseña"
                //   onChange={(event) => {
                //     setEmail(event.target.value);
                //   }}
                ></input>
                <label>Confirmar contraseña </label>
                <br />
                <br />
                <input
                  className="input-password"
                  type="password"
                  placeholder="Confirmar Contraseña"
                //   onChange={(event) => {
                //     setPass(event.target.value);
                //   }}
                ></input>
              </div>
              <div className="div-password">
                <Button
                  type="button"
                  className="btnPassword"
                //   onClick={() => {
                //     setCheckData({ email, pass });
                //   }}
                >
                  Cambiar contraseña
                </Button>
              </div>
            </form>
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}
