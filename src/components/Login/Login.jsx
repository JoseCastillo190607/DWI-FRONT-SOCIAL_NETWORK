// import React from 'react'
import "./login.css"

// export default function Login() {
//   return (
//     <div>Login</div>
//   )
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Login() {
  return (
    <div className="containerLogin">
    <Card className="containerLogin" sx={{ minWidth: 275, height:580, width:350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <form className="form-login">
          <div className="div-login">
          <input className="input-login">
          </input>
          <input className="input-login">
          </input>
          </div>
          <div className="div-button">
            <Button className="btn btn-primary">Login</Button>
          </div>
        </form>
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card className="containerRegister" size="small" sx={{ minWidth: 275, height:63, width:350 }}>
    <CardActions >
    <div className="containerLabel-Resgistro">
    <div className="" maxWidth="50%">
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
    <label className="Register" size="small">¿No tienes una cuenta?</label>
    </Typography>
    </div>
    <div className="" maxWidth="50%"> 
      <Button className="btnRegister" size="small">Registrate</Button>
    </div>
    </div>
    </CardActions>
  </Card>
  </div> 
  );
}