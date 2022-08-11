import "./changePassword.css";
import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const url = '//localhost:5000/api/register';


export default function ChangePassword() {

  const [datapass, setDatapass] = useState({});

  function coincidir(){
    if(datapass.passnew === datapass.passcon){
      console.log("pass correcta");
      axios.post(`${url}`,datapass)
    }
    else{
      console.log("contraseña incorrecta");
    }
  }

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
                  type="password"
                  onChange={(event) => {
                    setDatapass((current) => ({...current,passant:event.target.value}));
                  }}
                >

                </input>
                <label>Ingresar nueva contraseña</label>
                <br />
                <br />
                <input
                  className="input-password"
                  placeholder="Nueva contraseña"
                  type="password"
                  onChange={(event) => {
                    setDatapass((current) => ({...current,passnew:event.target.value}));
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
                    setDatapass((current) => ({...current,passcon:event.target.value}));
                  }}
                ></input>
              </div>
              <div className="div-password">
                <Button
                  type="button"
                  className="btnPassword"
                  onClick={() => {
                    coincidir()
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
