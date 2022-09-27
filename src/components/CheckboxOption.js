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
    setOptionSelected,
}) => {
    const [checked, setChecked] = useState(
        storedFilterValue[groupValue] === value
    );

    const addFilterValue = () => {
        storedFilterValue[groupValue] = value;
    };

    const removeFilterValue = () => {
        delete storedFilterValue[groupValue];
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

        setStoredFilters({ ...storedFilterValue });
        setChecked(!checked);
        setOptionSelected(label, !checked);
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
