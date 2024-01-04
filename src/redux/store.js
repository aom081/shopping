import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        },
        devTools:true,
});