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
        storedFilterValue[value] = filterValue;
        setStoredFilters({ ...storedFilterValue });
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={
                    storedFilterValue[value] || `Filtrar por ${filterBy}`
                }
                placeholderTextColor='#8F8F8F'
                onChangeText={(filterValue) => saveFilter(filterValue)}
            />
        </View>
    );
};

export default FilterTextInput;
