import { configureStore } from "@reduxjs/toolkit";
import storedFilterReducer from "../reducers/storedFilterReducer";

export const store = configureStore({
    reducer: {
        storedFilter: storedFilterReducer,
    },
});
