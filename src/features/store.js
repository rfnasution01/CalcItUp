import { configureStore } from '@reduxjs/toolkit';
import { isMobileReducer, navigationReducer, settingReducer } from '.';

const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    navigation: navigationReducer,
    setting: settingReducer,
  },
});

export default store;
