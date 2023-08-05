import React from 'react'
import { Link } from 'react-router-dom'
import { IconLogo } from '../../../../../assets'
import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setDescriptionEn, setDescriptionId, setNavigation, setSubMenu } from '../../../../../features/navigation'
import { listNavigationUp } from '../component'

const HeaderSidebar = () => {
  const dispatch = useDispatch();

  const data = listNavigationUp[0]
  const title = data.name;
  const desc = data.desc;
  const deskripsi = data.deskripsi;
  const subMenu = data.subMenu;

  const handleClick = (title, desc, deskripsi, subMenu) => {
    dispatch(setNavigation(title))
    dispatch(setDescriptionId(deskripsi))
    dispatch(setDescriptionEn(desc))
    dispatch(setSubMenu(subMenu));
}
  return (
    <Link
        to={'/'}
        onClick={()=>handleClick(
          title, 
          desc,
          deskripsi,
          subMenu
        )}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff',
          cursor: 'pointer',
          textDecoration: 'none',
          margin: '2rem',
        }}
      >
        <IconLogo />
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '130%',
          }}
        >
          MathWizard
        </Typography>
    </Link>
  )
}

export default HeaderSidebar
