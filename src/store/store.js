import { configureStore } from "@reduxjs/toolkit";
import storedFilterReducer from "../reducers/storedFilterReducer";
import savedFilterReducer from "../reducers/savedFilterReducer";
import filterModalVisibilityReducer from "../reducers/filterModalVisibilityReducer";
import displayCharacterReducer from "../reducers/displayCharacterReducer";
import homeScreenLoadingReducer from "../reducers/homeScreenLoadingReducer";

export const store = configureStore({
    reducer: {
        storedFilter: storedFilterReducer,
        savedFilter: savedFilterReducer,
        filterModalVisibility: filterModalVisibilityReducer,
        displayCharacter: displayCharacterReducer,
        homeScreenLoading: homeScreenLoadingReducer,
    },
});
