import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Mathulator } from '../../pages/mathOps';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getSubMenuEn, getSubMenuId, getSubMenuTitle } from '../../features/navigation';
import { getIsId } from '../../features/setting';
import { Breadcrumb } from '../../components';

const PageLayout = () => {
    const { pathname } = useLocation();
    const currentPath = pathname === '/' ? 'root' : pathname.split('/')[1];
    const title = useSelector(getSubMenuTitle);
    const desc = useSelector(getSubMenuEn);
    const deskripsi = useSelector(getSubMenuId);
    const lang = useSelector(getIsId);

    return (
        <Box
            sx={{
                marginTop: '1rem'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginY: '1rem',
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'serif',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '24px',
                            letterSpacing: '130%',
                            color: '#333'
                        }}
                    >{title}</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            letterSpacing: '130%',
                            color: '#808080'
                        }}
                    >{lang? deskripsi: desc}</Typography>
                </Box>
                
                {/* --- Breadcrumb --- */}
                <Breadcrumb pathname={currentPath === 'root'? '/mathops': pathname} />
            </Box>
          
        {
            currentPath === 'root' ? 
                <Mathulator/>
            :
                <Outlet />
        }
        </Box>
    )
}

export default PageLayout
