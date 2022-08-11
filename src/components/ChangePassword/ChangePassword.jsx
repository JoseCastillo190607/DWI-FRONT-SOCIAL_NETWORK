import "./changePassword.css";
import React, { useContext, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { GlobalContext } from "../../context/global-context";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"

const url = "//localhost:5000/api/register";

export default function ChangePassword() {

  const navigate = useNavigate();

  const { userdata } = useContext(GlobalContext);

  const [datapass, setDatapass] = useState({});

  function coincidir() {
    if (datapass.passnew === datapass.passcon) {
      console.log("pass correcta");
      axios.put(`${url}?iduser=${userdata._id}`, datapass).then((item) => {
        if(item.err===true){
          Swal.fire({
            icon: "error",
            title: "Opps",
            text: "Ocurrio un error!, la contraseña no se cambio",
          });
        }
        else{
          Swal.fire({
            icon: "success",
            title: "Felicidades",
            text: "La contraseña se ha actualizado",
            timer:3000,
          });
          navigate('/posts')
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps",
        text: "Las contraseñas no coinciden",
      });
    }
  }

  return (
    <div>
      <div className="containerPassword" sx={{ minWidth: 275, width: 350 }}>
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
                  type="password"
                  onChange={(event) => {
                    setDatapass((current) => ({
                      ...current,
                      passant: event.target.value,
                    }));
                  }}
                ></input>
                <label>Ingresar nueva contraseña</label>
                <br />
                <br />
                <input
                  className="input-password"
                  placeholder="Nueva contraseña"
                  type="password"
                  onChange={(event) => {
                    setDatapass((current) => ({
                      ...current,
                      passnew: event.target.value,
                    }));
                  }}
                ></input>
                <label>Confirmar contraseña </label>
                <br />
                <br />
                <input
                  className="input-password"
                  type="password"
                  placeholder="Confirmar Contraseña"
                  onChange={(event) => {
                    setDatapass((current) => ({
                      ...current,
                      passcon: event.target.value,
                    }));
                  }}
                ></input>
              </div>
              <div className="div-password">
                <Button
                  type="button"
                  className="btnPassword"
                  onClick={() => {
                    coincidir();
                  }}
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
