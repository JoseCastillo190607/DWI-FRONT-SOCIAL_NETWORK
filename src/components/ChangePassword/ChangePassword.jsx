import "./changePassword.css";
import React, { useContext, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { GlobalContext } from "../../context/global-context";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"
import { useTranslation } from "react-i18next";

const url = "https://dewin007.herokuapp.com/api/register";

export default function ChangePassword() {
  const { i18n, t } = useTranslation();

  const navigate = useNavigate();

  const { userdata } = useContext(GlobalContext);
  const [datapass, setDatapass] = useState({});

  function coincidir() {
    if (datapass.passnew === datapass.passcon) {
      axios.put(`${url}?iduser=${userdata._id}`, datapass).then((item) => {
        if (item.err === true) {
          Swal.fire({
            icon: "error",
            title: "Opps",
            text: `${t("registeralert1")}, ${t("password2")}`,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: `${t("password1")}`,
            text: `${t("password3")}`,
            timer: 3000,
          });
          navigate("/posts");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps",
        text: `${t("password4")}`,
      });
    }
  }

  return (
    <div>
      <div className="containerPassword" sx={{ minWidth: 275, width: 350 }}>
        <CardContent>
          <Typography className="containerContent" variant="h5" component="div">
            <div className="divDevs" width="50%">
              {t("change_pass")}
            </div>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form className="form-login">
              <div className="div-login">
                <label>{t("actual_pass")}</label>
                <br />
                <input
                  className="input-password"
                  placeholder={t("actual_pass")}
                  type="password"
                  onChange={(event) => {
                    setDatapass((current) => ({
                      ...current,
                      passant: event.target.value,
                    }));
                  }}
                ></input>
                <label>{t("new_pass")}</label>
                <br />
                <br />
                <input
                  className="input-password"
                  placeholder={t("new_pass")}
                  type="password"
                  onChange={(event) => {
                    setDatapass((current) => ({
                      ...current,
                      passnew: event.target.value,
                    }));
                  }}
                ></input>
                <label>{t("confirm_pass")}</label>
                <br />
                <br />
                <input
                  className="input-password"
                  type="password"
                  placeholder={t("confirm_pass")}
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
                  {t("change_pass")}
                </Button>
              </div>
            </form>
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}
