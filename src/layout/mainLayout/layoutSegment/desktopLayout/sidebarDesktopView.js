import {Divider, Drawer } from '@mui/material';
import React from 'react';
import { FooterSidebar, HeaderSidebar, MenuSidebar, SettingSidebar } from './sidebarElement';


const SidebarDesktopView = ({drawerWidth}) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#3B97CB',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* --- Logo --- */}
      <HeaderSidebar />

      {/* --- Setting --- */}
      <SettingSidebar />

      {/* --- Menu --- */}
      <MenuSidebar />

      <Divider sx={{ margin: '1.5vw', bgcolor: '#fff' }} />

      {/* --- Footer --- */}
      <FooterSidebar />
    </Drawer>
  );
};

export default SidebarDesktopView;
