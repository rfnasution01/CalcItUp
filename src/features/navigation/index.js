import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    navigations: '',
    descriptionId: '',
    descriptionEn: '',
    subMenuTitle: '',
    subMenuId: '',
    subMenuEn: '',
    subMenu: [],
  },
  reducers: {
    setNavigation: (state, action) => {
      state.navigations = action.payload;
    },
    setDescriptionId: (state, action) => {
      state.descriptionId = action.payload;
    },
    setDescriptionEn: (state, action) => {
      state.descriptionEn = action.payload;
    },
    setSubMenuTitle: (state, action) => {
      state.subMenuTitle = action.payload;
    },
    setSubMenuId: (state, action) => {
      state.subMenuId = action.payload;
    },
    setSubMenuEn: (state, action) => {
      state.subMenuEn = action.payload;
    },
    setSubMenu: (state, action) => {
      state.subMenu = action.payload;
    },
  },
});

export const { 
  setNavigation, 
  setDescriptionId, 
  setDescriptionEn,
  setSubMenuTitle,
  setSubMenuId,
  setSubMenuEn, 
  setSubMenu 
} = navigationSlice.actions;

export const getNavigation = (state) => state.navigation.navigations;
export const getDescriptionId = (state) => state.navigation.descriptionId;
export const getDescriptionEn = (state) => state.navigation.descriptionEn;
export const getSubMenuTitle = (state) => state.navigation.subMenuTitle;
export const getSubMenuId = (state) => state.navigation.subMenuId;
export const getSubMenuEn = (state) => state.navigation.subMenuEn;
export const getSubMenu = (state) => state.navigation.subMenu;

export default navigationSlice.reducer;
