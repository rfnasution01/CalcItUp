import React from 'react'
import { useSelector } from 'react-redux'
import { getSubMenuEn, getSubMenuId, getSubMenuTitle } from '../../features/navigation'
import { getIsId } from '../../features/setting';

const Geometry = () => {
  const title = useSelector(getSubMenuTitle);
  const en = useSelector(getSubMenuId);
  const lang = useSelector(getIsId);
  const id = useSelector(getSubMenuEn);


  return (
    <div>
      <h1>{title}</h1>
      <h4>{lang ? en: id}</h4>
    </div>
  )
}

export default Geometry
