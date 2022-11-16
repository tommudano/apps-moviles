import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const filterModalVisibilityReducer = createSlice({
    name: "filterModalVisibility",
    initialState,
    reducers: {
        setFilterModalVisiblity: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setFilterModalVisiblity } = filterModalVisibilityReducer.actions;

export default filterModalVisibilityReducer.reducer;
