import "./login.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const local = "//localhost:5000/api/register/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checkdata, setCheckData] = useState("");

  const login = () => {
    axios
      .post(`${local}`, checkdata)
      .then((resp) => {
        let datos = resp.data;
        if (datos.err === false) {
          console.log(datos.msg);
        } else {
          Swal.fire({ icon: "error", title: "Opps", text: "Ocurrio un error" });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Opps",
          text: "Ocurrio un error",
        });
      });
  };

  useEffect(login, [checkdata]);

  return (
    <div>
      <div className="containerLogin"
        sx={{ minWidth: 275, height: 396, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
          
          <span className="corazonContainer"> <div className='like'>
        </div> </span>
            <div className="divDevs" width='50%'>
            Devstragram
            </div>
            
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <input
                  className="input-correo"
                  placeholder="Correo electronico"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></input>
                <input
                  className="input-password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                ></input>
              </div>
              <div className="div-login">
                <Button
                  type="button"
                  className="btnLogin"
                  onClick={() => {
                    setCheckData({ email, pass });
                  }}
                >Inicia Sesion</Button>
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
          <Button className="btnRegister" size="small">
            Registrate
          </Button>
        </CardActions>
      </div>
    </div>
  );
}
