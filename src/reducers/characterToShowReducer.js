import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const characterToShowReducer = createSlice({
    name: "characterToShow",
    initialState,
    reducers: {
        setCharacterToShow: (state, action) => {
            state.value = { ...action.payload };
        },
    },
});

export const { setCharacterToShow } = characterToShowReducer.actions;

export default characterToShowReducer.reducer;
