import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productsSlice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
