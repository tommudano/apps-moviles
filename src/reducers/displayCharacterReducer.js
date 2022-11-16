import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const displayCharacterReducer = createSlice({
    name: "displayCharacter",
    initialState,
    reducers: {
        setDisplayCharacter: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setDisplayCharacter } = displayCharacterReducer.actions;

export default displayCharacterReducer.reducer;
