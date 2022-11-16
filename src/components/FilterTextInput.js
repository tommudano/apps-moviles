import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/FilterTextInputStyles";
import colors from "./constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../reducers/storedFilterReducer";

const FilterTextInput = ({ value, filterBy }) => {
    let storedFilter = useSelector((state) => state.storedFilter.value);
    const dispatch = useDispatch();

    const saveFilter = (filterValue) => {
        let filters = { ...storedFilter };
        if (filterValue.trim()) {
            filters[value] = filterValue;
        } else {
            delete filters[value];
        }
        dispatch(load(filters));
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={`Filter by ${filterBy}`}
                placeholderTextColor={colors.filterTitle}
                value={storedFilter[value]}
                onChangeText={(text) => saveFilter(text)}
            />
        </View>
    );
};

export default FilterTextInput;
