import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/FilterTextInputStyles";

const FilterTextInput = ({
    value,
    setStoredFilters,
    filterBy,
    storedFilterValue,
}) => {
    const saveFilter = (filterValue) => {
        if (filterValue.trim()) {
            storedFilterValue[value] = filterValue;
        } else {
            delete storedFilterValue[value];
        }
        setStoredFilters({ ...storedFilterValue });
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={`Filter by ${filterBy}`}
                placeholderTextColor='#8F8F8F'
                value={storedFilterValue[value]}
                onChangeText={(text) => saveFilter(text)}
            />
        </View>
    );
};

export default FilterTextInput;
