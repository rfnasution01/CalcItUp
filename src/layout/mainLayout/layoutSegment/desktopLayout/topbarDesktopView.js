import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { SubMenuTopbar, TitleTopbar } from './topbarElement.js';

const TopbarDesktopView = ({drawerWidth}) => {
  

  return (
    <AppBar
      position="fixed"
      sx={{ 
        width: `calc(100% - ${drawerWidth}px)`, 
        ml: `${drawerWidth}px`,
        backgroundColor: '#fff' 
      }}
    >
      <Toolbar 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* --- Navigation --- */}
        <TitleTopbar />
        

        {/* --- SubMenu --- */}
        <SubMenuTopbar />
        
      </Toolbar>
    </AppBar>
  )
}

export default TopbarDesktopView;