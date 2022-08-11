import "./login.css";

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const url = "//localhost:5000/api/register/login";

export default function Login() {
  const navigate = useNavigate();
  const [checkdata, setCheckData] = useState({});
  const { handleUser } = useContext(GlobalContext);

  const login = () => {
    axios
      .post(`${url}`, checkdata)
      .then((resp) => {
        let datos = resp.data;
        if (datos.err === false) {
          handleUser(datos.userdata);
          navigate("/posts");
        } else {
          Swal.fire({
            icon: "error",
            title: "Opps",
            text: "Contraseña incorrecta",
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
    <div>
      <div className="containerLogin"
        sx={{ minWidth: 275, height: 396, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
          
          <span className="corazonContainer"> <div className='like'>
        </div> </span>
            <div className="divDevs" width='50%'>
            Devstagram
            </div>
            
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <input
                  className="input-correo"
                  placeholder="Correo electrónico"
                  onChange={(event) => {
                    setCheckData((current) => ({
                      ...current,
                      email: event.target.value,
                    }));
                  }}
                ></input>
                <input
                  className="input-password"
                  type="password"
                  placeholder={("password")}
                  onChange={(event) => {
                    setCheckData((current) => ({
                      ...current,
                      pass: event.target.value,
                    }));
                  }}
                ></input>
              </div>
              <div className="div-login">
                <Button
                  type="button"
                  className="btnLogin"
                  onClick={() => {
                    login();
                  }}
                >
                  Inicia Sesion
                </Button>
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
          <label size="small">{("neg_question")}</label>
        </Typography>
        <CardActions className="btnRegister">
          <Link to="/register">
            <Button className="btnRegister" size="small">
              Registrate
            </Button>
          </Link>
        </CardActions>
      </div>
    </div>
  );
}
