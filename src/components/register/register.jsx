import "./register.css";

import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";

import axios from "axios";
import Swal from "sweetalert2";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const url = "//localhost:5000/api/register";

export default function Login() {
  const [name, setName] = useState("");
  const [firstlastname, setFirstlastname] = useState("");
  const [secondlastname, setSecondlastname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [photo, setPhoto] = useState("");
  const [dataregister, setDataregister] = useState({});

  const register = () => {
    axios
      .post(`${url}`, dataregister)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Opps",
          text: "Ocurrio un error",
        });
      });
  };

  return (
    <div style={{ paddingTop: "1%", paddingBottom: "1%" }}>
      <Card
        className="containerLogin"
        sx={{ minWidth: 275, height: 700, width: 350 }}
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
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <input
                  className="input-password"
                  placeholder="Apellido Paterno"
                  type="text"
                  onChange={(event) => {
                    setFirstlastname(event.target.value);
                  }}
                />
                <input
                  className="input-correo"
                  placeholder="Apellido materno"
                  type="text"
                  onChange={(event) => {
                    setSecondlastname(event.target.value);
                  }}
                />
                <input
                  className="input-correo"
                  placeholder="Correo electronico"
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <input
                  className="input-correo"
                  placeholder="Contraseña"
                  type="password"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                />
                <input
                  className="input-correo"
                  placeholder="Fecha de nacimiento"
                  type="date"
                  onChange={(event) => {
                    setDateofbirth(event.target.value);
                  }}
                />
                <div className="div-login">
                 <img
                    src= {`https://ucarecdn.com/${photo}/-/resize/100x100/-/preview/`}
                    alt="foto tomada"
                  />
                  <br/>
                  <Widget
                    variant="outlined"
                    publicKey="712e3cdcf23e9fa90269"
                    enableVideoRecording="false"
                    tabs="file camera"
                    onFileSelect={(file) => {
                      console.log("File changed: ", file);
                      if (file) {
                        file.progress((info) =>
                          console.log("File progress: ", info.progress)
                        );
                        file.done((info) =>
                          console.log("File uploaded: ", info)
                        );
                      }
                    }}
                    onChange={(info) => setPhoto(info.uuid)}
                  />
                </div>
              </div>
              <br />
              <div className="div-login">
                <Button
                  className="btnLogin"
                  onClick={() => {
                    setDataregister({
                      name,
                      firstlastname,
                      secondlastname,
                      email,
                      pass,
                      dateofbirth,
                      photo,
                    });
                    console.log(dataregister);
                    register();
                  }}
                >
                  Registrate
                </Button>
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
