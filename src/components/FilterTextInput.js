import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/FilterTextInputStyles"

const FilterTextInput = ({filterBy}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder={`Filtrar por ${filterBy}`} placeholderTextColor="#8F8F8F"/>
        </View>
    )
}

export default FilterTextInput