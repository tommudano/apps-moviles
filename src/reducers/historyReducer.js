import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const historyReducer = createSlice({
    name: "history",
    initialState,
    reducers: {
        setHistoryReducer: (state, action) => {
            state.value = [...action.payload];
        },
    },
});

export const { setHistoryReducer } = historyReducer.actions;

export default historyReducer.reducer;
