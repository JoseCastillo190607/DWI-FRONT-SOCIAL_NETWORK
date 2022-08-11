import "./register.css";

import React, { useContext, useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const url = "https://dewin007.herokuapp.com/api/register";

export default function Login() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [dataregister, setDataregister] = useState({});
  const { handleUser } = useContext(GlobalContext);
  const { i18n, t } = useTranslation();

  const register = () => {
    axios
      .post(`${url}`, dataregister)
      .then((resp) => {
        let data = resp.data;
        if (data.err === false) {
          // handleUser(dataregister);
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Opps",
            text: `${t("registeralert1")}`,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Opps",
          text: `${t("registeralert1")}`,
        });
      });
  };

  return (
    <div>
      {/* // <div style={{ paddingTop: "1%", paddingBottom: "1%" }}> */}
      <div
        className="containerRegister"
        sx={{ minWidth: 275, height: 700, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
            <div className="containerLogo"> 
             <div className="divDevs">
              Devstagram
            </div>
            
            </div>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <input
                  className="input-correo"
                  placeholder={t("name")}
                  type="text"
                  onChange={(event) => {
                    setDataregister((current) => ({
                      ...current,
                      name: event.target.value,
                    }));
                  }}
                />
                <input
                  className="input-correo"
                  placeholder={t("f_lastname")}
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
                  placeholder={t("s_lastname")}
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
                  placeholder={t("email")}
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
                  placeholder={t("password")}
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
                  placeholder={t("birth")}
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
                    className="imgRegister"
                    width="110px"
                    src={`https://ucarecdn.com/${photo}/-/resize/100x100/-/preview/`}
                    alt="foto tomada"
                  />
                  <br />
                  <Widget
                    className="btnImg"
                    variant="outlined"
                    publicKey="712e3cdcf23e9fa90269"
                    enableVideoRecording="false"
                    tabs="file camera"
                    onFileSelect={(info) => {
                      if (info) {
                        info.done((file) => setPhoto(file.uuid));
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
              <div className="div-div-loginBtn">
                <Button
                  className="div-loginBtn"
                  onClick={() => {
                    register();
                  }}
                >
                  {t("sign")}
                </Button>
              </div>
            </form>
          </Typography>
        </CardContent>
      </div>

      <div
        className="containerRegister"
        size="small"
        sx={{ height: 63, width: 350 }}
      >
        <Typography
          className="labelRegistro"
          variant="body2"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          <label size="small">{t("question")}</label>
        </Typography>
        <CardActions className="btnRegister">
          <Link className="linkLogin" to="/login">
            <Button className="btnRegister" size="small">
              {t("login")}
            </Button>
          </Link>
        </CardActions>
      </div>
    </div>
  );
}
