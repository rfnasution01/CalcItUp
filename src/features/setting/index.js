import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    isDark: false,
    isId: false,
  },
  reducers: {
    setIsDark: (state, action) => {
      state.isDark = action.payload;
    },
    setIsId: (state, action) => {
        state.isId = action.payload;
      },
  },
});

export const { setIsDark, setIsId } = settingSlice.actions;
export const getIsDark = (state) => state.setting.isDark;
export const getIsId = (state) => state.setting.isId;

export default settingSlice.reducer;
