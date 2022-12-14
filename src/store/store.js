import { configureStore } from "@reduxjs/toolkit";
import storedFilterReducer from "../reducers/storedFilterReducer";
import savedFilterReducer from "../reducers/savedFilterReducer";
import filterModalVisibilityReducer from "../reducers/filterModalVisibilityReducer";
import displayCharacterReducer from "../reducers/displayCharacterReducer";
import homeScreenLoadingReducer from "../reducers/homeScreenLoadingReducer";
import characterToShowReducer from "../reducers/characterToShowReducer";
import historyReducer from "../reducers/historyReducer";

export const store = configureStore({
    reducer: {
        storedFilter: storedFilterReducer,
        savedFilter: savedFilterReducer,
        filterModalVisibility: filterModalVisibilityReducer,
        displayCharacter: displayCharacterReducer,
        homeScreenLoading: homeScreenLoadingReducer,
        characterToShow: characterToShowReducer,
        history: historyReducer,
    },
});
