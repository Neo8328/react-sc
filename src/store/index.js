import { configureStore } from "@reduxjs/toolkit";
import indexApi from "./indexApi";

// import {setupListeners} from '@reduxjs/toolkit/query';


const store = configureStore({
  reducer: {
    [indexApi.reducerPath]: indexApi.reducer,
    
  },

  middleware: getDefaultMiddleware=>
  getDefaultMiddleware().concat(indexApi.middleware),
})

// setupListeners(store.dispatch) //设置以后，refetchOnFocus， refetchOnReconnect才会生效

export default store;