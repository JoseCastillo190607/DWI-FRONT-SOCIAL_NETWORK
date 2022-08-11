import "./login.css";

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const url = "https://dewin007.herokuapp.com/api/register/login";

export default function Login() {
  const navigate = useNavigate();
  const [checkdata, setCheckData] = useState({});
  const { handleUser } = useContext(GlobalContext);
  const { i18n, t } = useTranslation();

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
            text: `${t("loginalert1")}`,
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
      <div
        className="containerLogin"
        sx={{ minWidth: 275, height: 396, width: 350 }}
      >
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
            {/* <div className="divDevs" width="50%">
              <span className="corazonContainer">
                {" "}
                <div className="like"></div>{" "}
              </span>
            </div> */}
            <div className="divDevs" width="50%">
              Devstagram
            </div>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <input
                  className="input-correo"
                  placeholder={t("email")}
                  onChange={(event) => {
                    setCheckData((current) => ({
                      ...current,
                      email: event.target.value,
                    }));
                  }}
                ></input>
                <input
                  className="input-correo"
                  type="password"
                  placeholder={t("password")}
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
                  {t("login")}
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
          className="labelRegistrologin"
          variant="body2"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          <label size="small">{t("neg_question")}</label>
        </Typography>
        <CardActions className="btnRegister">
          <Link className="linkRegister" to="/register">
            <Button className="btnRegister" size="small">
              {t("sign")}
            </Button>
          </Link>
        </CardActions>
      </div>
    </div>
  );
}
