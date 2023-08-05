import React from 'react'
import { Box } from '@mui/material'
import SidebarDesktopView from './sidebarDesktopView';
import MainRouting from '../../../../routes/mainRouting';
import TopbarDesktopView from './topbarDesktopView';

const drawerWidth = 280;

const DesktopLayout = () => {

  return (
    <Box sx={{ display: 'flex' }}>
        <SidebarDesktopView drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
            <TopbarDesktopView drawerWidth={drawerWidth} />
            <Box
                component='article' 
                sx={{
                    bgcolor: '#E7F5FD', 
                    minHeight: '80vh',
                    padding: '4rem 1.6rem' 
                }}
            >
                <MainRouting />
            </Box> 
        </Box>
    </Box>
  )
}

export default DesktopLayout
