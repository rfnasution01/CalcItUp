import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsMobile, setIsMobile } from '../../features/isMobile';
import { Box, useMediaQuery } from '@mui/material';
import { theme } from '../../configs';
import { DesktopLayout, MobileLayout } from './layoutSegment';
import { getDescriptionEn, getDescriptionId, getNavigation, getSubMenu, getSubMenuEn, getSubMenuId, getSubMenuTitle, setDescriptionEn, setDescriptionId, setNavigation, setSubMenu, setSubMenuEn, setSubMenuId, setSubMenuTitle } from '../../features/navigation';
import { listNavigationUp } from './layoutSegment/desktopLayout/component';

const MainLayout = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(getIsMobile);
  const listMenu = listNavigationUp;
  const newData = listMenu[0] 
  const dataFirst = newData.subMenu[0];

  const mobileMediaQuery = useMediaQuery('(max-width: 960px)');
  const navigation = useSelector(getNavigation);
  const desc = useSelector(getDescriptionEn);
  const deskripsi = useSelector(getDescriptionId);
  const subMenu = useSelector(getSubMenu);
  const subMenuTitle = useSelector(getSubMenuTitle);
  const subMenuId = useSelector(getSubMenuId);
  const subMenuEn = useSelector(getSubMenuEn);

  useEffect(() => {
      dispatch(setIsMobile(mobileMediaQuery))
      if(
        navigation === '' || 
        desc === '' || 
        deskripsi === '' || 
        subMenu.length === 0 || 
        subMenuTitle === '' || 
        subMenuId === '' ||
        subMenuEn === ''
      ){
        dispatch(setNavigation(newData.name))
        dispatch(setDescriptionEn(newData.desc))
        dispatch(setDescriptionId(newData.deskripsi))
        dispatch(setSubMenu(newData.subMenu))
        dispatch(setSubMenuTitle(dataFirst.name))
        dispatch(setSubMenuId(dataFirst.deskripsi))
        dispatch(setSubMenuEn(dataFirst.desc))
      }    
  }, [
        dispatch, 
        mobileMediaQuery, 
        navigation, 
        desc, 
        deskripsi,
        subMenuTitle,
        subMenuId,
        subMenuEn,
        newData.name,
        newData.desc,
        newData.deskripsi,
        newData.subMenu,
        subMenu.length,
        dataFirst.name,
        dataFirst.deskripsi,
        dataFirst.desc,
    ]);
  
  return (
    <Box
        sx={{
            bgcolor: theme.palette.primary.light,
            minHeight: '100vh',
        }}
    >
        {
            isMobile ?
                <MobileLayout/>
            :
                <DesktopLayout/> 
        }
    </Box>
  )
}

export default MainLayout
