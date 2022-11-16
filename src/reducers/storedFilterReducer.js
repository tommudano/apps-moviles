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

// const allCharacterReducer = (state = [], action) => {
//     switch (action.type) {
//         case "@allCharacters/load":
//             console.log(action.payload);
//             return [...action.payload];
//         default:
//             return state;
//     }
// };

// let allCharacterStore = createStore(allCharacterReducer);

export const { load } = storedFilterSlice.actions;

export default storedFilterSlice.reducer;
