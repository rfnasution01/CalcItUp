import { Box } from '@mui/material'
import React from 'react'
import { IconDark, IconEn, IconId, IconLight } from '../../../../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { getIsDark, getIsId, setIsDark, setIsId } from '../../../../../features/setting'

const SettingSidebar = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(getIsDark);
    const isId = useSelector(getIsId);

    const darkHandle = () => {
        dispatch(setIsDark(!isDark))
    }
    
    const idHandle = () => {
        dispatch(setIsId(!isId))
    }
    return (
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '1rem',
            marginBottom: '2rem',
            }}
        >
            <Box
            sx={{
                cursor: 'pointer'
            }}
            onClick={idHandle}
            >
            {
                isId ?
                <IconEn />
                :
                <IconId />
            }
            </Box>
            <Box
            sx={{
                cursor: 'pointer'
            }}
            onClick={darkHandle}
            >
            {
                isDark?
                <IconDark />
                :
                <IconLight />
            }
            </Box>
        </Box>
    )
}

export default SettingSidebar
