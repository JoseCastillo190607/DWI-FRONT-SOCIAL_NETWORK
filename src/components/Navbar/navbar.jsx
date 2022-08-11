import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar/navbar.css';
import { GlobalContext } from "../../context/global-context";
import { useContext } from 'react';
import { unstable_getNormalizedScrollLeft } from '@mui/utils';


export default function Navbar() {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { userdata, handleUser } = useContext(GlobalContext);
  console.log('userdata:',userdata)

  function loguot(){
    handleUser({});
    navigate("/login");
  }
  
//  const { handleUser } = useContext(GlobalContext);
  

  return (
    <div className=''>
      <React.Fragment>
        <Box className='nav' sx={{
          display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: 'black', width: '900px', height: '50px', borderRadius: '10px', justifyContent: 'center'
        }}>
        <Typography sx={{ minWidth: 100 }}>{userdata.name} {userdata.firstlastname} {userdata.secondlastname}</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Editar Cuenta
        </MenuItem>
        <MenuItem>
        <Link className='link' to="/cambiarPass">
          <Avatar /> Cambiar Contraseña
        </Link>
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={()=>{loguot()}}>
        
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Salir

        </MenuItem>
      </Menu>
    </React.Fragment>
    </div >
  );
}
