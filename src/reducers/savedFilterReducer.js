import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const savedFilterSlice = createSlice({
    name: "savedFilters",
    initialState,
    reducers: {
        loadSavedFilters: (state, action) => {
            state.value = { ...action.payload };
        },
    },
});

export const { loadSavedFilters } = savedFilterSlice.actions;

export default savedFilterSlice.reducer;
