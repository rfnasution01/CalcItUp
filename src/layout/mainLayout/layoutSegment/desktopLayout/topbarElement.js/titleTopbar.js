import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { getDescriptionEn, getDescriptionId, getNavigation } from '../../../../../features/navigation';
import { getIsId } from '../../../../../features/setting';

const TitleTopbar = () => {
    const navigation = useSelector(getNavigation);
    const description = useSelector(getDescriptionEn);
    const deskripsi = useSelector(getDescriptionId);
    const isId = useSelector(getIsId);

    return (
        <Box>
          <Typography 
            variant="h6" 
            noWrap 
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '130%',
              color: '#303030'
            }}
          >
            {
              navigation === ''
                ? 'MathWizard'
                : navigation 
            }
          </Typography>
          <Typography 
            variant="h6" 
            noWrap 
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '130%',
              color: '#808080'
            }}
          >
            {
              isId ?
                deskripsi
              :
                description
            }
          </Typography>
        </Box>
  )
}

export default TitleTopbar
