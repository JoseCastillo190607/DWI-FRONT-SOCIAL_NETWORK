import "./register.css";

import React, { useContext, useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import axios from "axios";
import Swal from "sweetalert2";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const url = "//localhost:5000/api/register";

export default function Login() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [dataregister, setDataregister] = useState({});
  const { handleUser } = useContext(GlobalContext);

  const register = () => {
    axios
      .post(`${url}`, dataregister)
      .then((resp) => {
        let data = resp.data;
        if (data.err === false) {
          handleUser(dataregister);
          navigate("/posts");
        } else {
          Swal.fire({
            icon: "error",
            title: "Opps",
            text: "Ocurrio un error",
          });
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
                  placeholder={("name")}
                  type="text"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      name: event.target.value,
                    }));
                  }}
                />
                <input
                  className="input-password"
                  placeholder={("f_lastname")}
                  type="text"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      firstlastname: event.target.value,
                    }));
                  }}
                />
                <input
                  className="input-correo"
                  placeholder={("s_lastname")}
                  type="text"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      secondlastname: event.target.value,
                    }));
                  }}
                />
                <input
                  className="input-correo"
                  placeholder={("email")}
                  type="email"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      email: event.target.value,
                    }));
                  }}
                />
                <input
                  className="input-correo"
                  placeholder={("password")}
                  type="password"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      pass: event.target.value,
                    }));
                  }}
                />
                <input
                  className="input-correo"
                  placeholder={("birth")}
                  type="date"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      dateofbirth: event.target.value,
                    }));
                  }}
                />
                <div className="div-login">
                  <img
                    src={`https://ucarecdn.com/${photo}/-/resize/100x100/-/preview/`}
                    alt="foto tomada"
                  />
                  <br />
                  <Widget
                    variant="outlined"
                    publicKey="712e3cdcf23e9fa90269"
                    enableVideoRecording="false"
                    tabs="file camera"
                    onFileSelect={(info)=>{
                      if(info){
                        info.done(file=>setPhoto(file.uuid))
                      }
                    }}
                    onChange={(info) =>
                      setDataregister((current) => ({
                        ...current,
                        photo: info.uuid,
                      }))
                    }
                  />
                </div>
              </div>
              <br />
              <div className="div-login">
                <Button
                  className="btnLogin"
                  onClick={() => {
                    register();
                  }}
                >
                  {("sign")}
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
          <label size="small">{("question")}</label>
        </Typography>
        <CardActions className="btnRegister">
          <Link to="/login">
            <Button className="btnRegister" size="small">
              Inicia Sesion
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
