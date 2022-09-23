import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Checkbox from "./Checkbox";
import styles from "../styles/CheckboxOptionStyles";

const CheckboxOption = ({
    groupValue,
    value,
    label,
    setStoredFilters,
    storedFilterValue,
}) => {
    const [checked, setChecked] = useState(
        Array.isArray(storedFilterValue[groupValue]) &&
            storedFilterValue[groupValue].indexOf(value) !== -1
    );

    const addFilterValue = () => {
        if (storedFilterValue[groupValue].indexOf(value) === -1) {
            storedFilterValue[groupValue].push(value);
        }
    };

    const removeFilterValue = () => {
        storedFilterValue[groupValue].pop(value);
    };

    const checkTheOption = () => {
        if (!Array.isArray(storedFilterValue[groupValue])) {
            storedFilterValue[groupValue] = [];
        }

        if (!checked) {
            addFilterValue();
        } else {
            removeFilterValue();
        }

        setStoredFilters(storedFilterValue);
        setChecked(!checked);
    };

    return (
        <TouchableWithoutFeedback onPress={() => checkTheOption()}>
            <View style={styles.option}>
                <View style={styles.checkbox}>
                    <Checkbox checked={checked} />
                </View>
                <Text style={styles.optionLabel}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CheckboxOption;
