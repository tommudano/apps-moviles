import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const storedFilterSlice = createSlice({
    name: "storedFilters",
    initialState,
    reducers: {
        load: (state, action) => {
            state.value = { ...action.payload };
        },
    },
});

export const { load } = storedFilterSlice.actions;

export default storedFilterSlice.reducer;
