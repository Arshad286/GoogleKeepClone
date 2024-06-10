import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import  AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';;
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar)`
  z-index:1201;
  height : 70px;
  background : #fff;
  box-shadow: insert 0 -1px 0 0 #dadca0
`
  
const Heading = styled(Typography)`
   font-size : 24px;
   color : black;
   margin-right : 45px;
 
`

const Headerbar = ({open, handleDrawer}) => {
   return (
     
    <Header open={open}>
    <Toolbar>
      <IconButton
       
        onClick={handleDrawer}
        edge="start"
        sx={{
          marginRight: '20px'
        }}
      >
        <MenuIcon />
      </IconButton>

      <Heading >
        Keep
      </Heading>
    </Toolbar>
  </Header>
   )

}

export default Headerbar;