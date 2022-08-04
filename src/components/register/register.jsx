import "./register.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Register() {
  return (
    <Typography>
      <Card
        className="containerRegister"
        sx={{ minWidth: 275, height: 500, width: 350 }}
      >
        <CardContent className="cardContent">
          <Typography variant="h5" component="Typography" >
            Devstragram
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <form defaultValue="" required>
              <Typography className="orderdiv">
                <div>
                <label className="nombre" htmlFor="nombre">Nombre: </label>
                </div>
                <div>
                <input type="text" name="nombre" id="nombre" />
                </div>
              </Typography>
              <Typography className="orderdiv">
                <div>
                <label htmlFor="Apaterno">Apellido Paterno </label>
                </div>
                <div>
                <input className="" type="text" name="Apaterno" id="Apaterno" />
                </div>
              </Typography>
              <Typography className="orderdiv">
                <div>
                <label htmlFor="Amaterno">Apellido Materno: </label>
                </div>
                <div>
                <input className="" type="text" name="Amaterno" id="Amaterno" />
              </div>
              </Typography>
              <Typography className="orderdiv">
              <div>
                <label htmlFor="correo">Correo: </label>
              </div>
              <div>
                <input className="" type="text" name="correo" id="correo" />
              </div>
              </Typography>
              <Typography className="orderdiv">
              <div>
                <label htmlFor="pass">Contraseña</label>
              </div>
              <div>
                <input className="" type="text" name="pass" id="pass" />
              </div>
              </Typography>
              <Typography className="orderdiv">
              <div>
                <label htmlFor="Fnacimineto">Fecha de nacimiento</label>
              </div>
              <div>
                <input
                  className=""
                  type="date"
                  name="Fnacimineto"
                  id="Fnacimineto"
                />
                </div>
              </Typography>
              <Typography>
                <Button>Registro</Button>
              </Typography>
            </form>
          </Typography>
        </CardContent>
      </Card>

      <Card
        className="containerLogin"
        size="small"
        sx={{ minWidth: 275, height: 63, width: 350 }}
      >
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
          <label size="small"> ¿ya tienes una cuenta?</label>
        </Typography>
        <CardActions>
          <Button size="small">Inicia sesion</Button>
        </CardActions>
      </Card>
    </Typography>
  );
}
