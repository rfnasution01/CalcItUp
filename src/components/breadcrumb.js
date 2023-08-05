import { Box, Typography } from '@mui/material'
import React from 'react'
import { capitalLetters } from '../utils';
import { Link } from 'react-router-dom';

const Breadcrumb = ({pathname}) => {
    const path = pathname.split('/');

    const color = {
        active: '#3B97CB',
        unactive: '#808080',
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
            }}
        >
            {
                path.map((item, idx)=>(
                    <Box 
                        key={idx}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            gap: '10px'
                        }}
                    >
                        <Box
                            component={Link}
                            to={'..'}
                            relative='path'
                            sx={{
                                color: 
                                    idx === path.length - 1 ?
                                        color.active
                                    : color.unactive,
                                cursor: 
                                    idx === path.length - 1 ?
                                        'default'
                                    : 'pointer',
                                textDecoration: 'none',
                                ':hover': {
                                    color: color.active
                                }
                            }}
                        >
                            <Typography>{capitalLetters(item)}</Typography>
                        </Box>
                        {
                            idx === path.length - 1 ?
                            ''
                            : <Typography>/</Typography>
                        }
                    </Box>
                ))
            }
        </Box>
    )
}

export default Breadcrumb
