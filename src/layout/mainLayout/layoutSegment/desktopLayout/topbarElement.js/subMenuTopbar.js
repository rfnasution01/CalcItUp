// Import statements (Make sure you have the required imports for the components and functions)
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getSubMenu, setSubMenuEn, setSubMenuId, setSubMenuTitle } from '../../../../../features/navigation';

const SubMenuTopbar = () => {
    const subMenu = useSelector(getSubMenu);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const parentPath = pathname.split('/')[1];
    const childPath = pathname.split('/')[2];

    const color = {
        active: '#3B97CB',
        unactive: '#333',
    };

    const handleClick = (title, desc, deskripsi) => {
        dispatch(setSubMenuTitle(title));
        dispatch(setSubMenuEn(desc));
        dispatch(setSubMenuId(deskripsi));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                gap: '10px',
            }}
        >
            {subMenu.map((item, idx) => (
                <Box
                    component={Link}
                    to={item.path}
                    onClick={() => handleClick(item.name, item.desc, item.deskripsi)}
                    sx={{
                        cursor: 'pointer',
                        textDecoration: 'none', 
                        px: '10px',
                        py: '8px',
                        color:
                            parentPath === '' && item.name === 'Mathulator'?
                                color.active
                            : childPath === undefined && idx === 0 ?
                                color.active   
                            : pathname === item.path ?
                                color.active
                            : color.unactive,
                        boxShadow:
                            parentPath === '' && item.name === 'Mathulator'?
                                '0 4px 8px rgba(0, 0, 0, 0.1)'
                            : childPath === undefined && idx === 0 ?
                                '0 4px 8px rgba(0, 0, 0, 0.1)'   
                            : pathname === item.path ?
                                '0 4px 8px rgba(0, 0, 0, 0.1)'
                            : 'none',
                        ':hover': {
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            color: color.active
                        }
                    }}
                    key={idx}
                >
                    <Typography
                        sx={{
                            fontFamily: 'serif',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '130%'
                        }}
                    >{item.name}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default SubMenuTopbar;
