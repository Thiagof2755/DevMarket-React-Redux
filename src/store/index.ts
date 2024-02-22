import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./reducers/categorias";
import { Categoria } from '../types/categoria';

const store = configureStore({
    reducer: {
        categorias: categoriasReducer
    }
});

export type RootState = {
    categorias: Categoria[];
};

export default store;