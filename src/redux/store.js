




import { configureStore } from "@reduxjs/toolkit";
import mainSlice from './slices/mainSlice'
const store = configureStore({
  reducer: {
    main: mainSlice
  }
});

export default store;



