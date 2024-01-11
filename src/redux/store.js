import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";
import pageReducer from "./pages/pageReducer";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        pages: pageReducer,
        },
        devTools:true,
});