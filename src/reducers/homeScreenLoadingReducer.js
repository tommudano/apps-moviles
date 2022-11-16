import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
};

export const homeScreenLoadingReducer = createSlice({
    name: "homeScreenLoading",
    initialState,
    reducers: {
        setHomeScreenLoading: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setHomeScreenLoading } = homeScreenLoadingReducer.actions;

export default homeScreenLoadingReducer.reducer;
