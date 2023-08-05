import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDescriptionEn, setDescriptionId, setNavigation } from '../../../../../features/navigation'
import { listNavigationDown } from '../component'

const FooterSidebar = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const currentPath = pathname === '/' ? 'root' : pathname.split('/')[1];

    const color = {
        active: '#3B97CB',
        unactive: '#fff',
      };
    const handleClick = (title, desc, deskripsi) => {
        dispatch(setNavigation(title))
        dispatch(setDescriptionId(deskripsi))
        dispatch(setDescriptionEn(desc))
    }

    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            marginX: '1.5vw',
            }}
        >
            {listNavigationDown.map((item, idx) => (
            <Box
                key={idx}
                component={Link} 
                onClick={()=>handleClick(item.name, item.desc, item.deskripsi)}
                to={item.path}
                sx={{
                backgroundColor:
                    item.path.slice(1) === currentPath ||
                    (item.path.slice(1) === 'mathops' && currentPath === 'root')
                    ? color.unactive
                    : 'transparent',
                color:
                    item.path.slice(1) === currentPath ||
                    (item.path.slice(1) === 'mathops' && currentPath === 'root')
                    ? color.active
                    : color.unactive,
                width: '100%',
                marginBottom: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                ':hover': {
                    backgroundColor: '#fff',
                    color: color.active,
                    '& svg path':{
                    fill: color.active,
                    stroke: color.active,
                    },
                },
                }}
            >
                {React.cloneElement(item.icon, {
                style: {
                    margin: '12px 1vw 12px 1.5vw',
                    padding: 0,
                    cursor: 'pointer',
                    fill:
                    item.path.slice(1) === currentPath ||
                    (item.path.slice(1) === 'mathops' && currentPath === 'root')
                        ? color.active
                        : color.unactive,
                    stroke:
                    item.path.slice(1) === currentPath ||
                    (item.path.slice(1) === 'mathops' && currentPath === 'root')
                        ? color.active
                        : color.unactive,
                },
                })}

                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '130%',
                        marginY: '12px',
                    }}
                >
                {item.name}
                </Typography>
            </Box>
            ))}
        </Box>
  )
}

export default FooterSidebar
