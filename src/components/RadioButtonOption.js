import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import RadioButton from "./RadioButton";
import styles from "../styles/RadioButtonOptionStyles";

const RadioButtonOption = ({
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
        if (!checked) {
            storedFilterValue[groupValue] = value;
        } else {
            delete storedFilterValue[groupValue];
        }

        setStoredFilters({ ...storedFilterValue });
        setChecked(!checked);
        setOptionSelected(label, !checked);
    };

    useEffect(() => {
        setChecked(storedFilterValue[groupValue] === value);
    }, [storedFilterValue]);

    return (
        <TouchableWithoutFeedback onPress={() => checkTheOption()}>
            <View style={styles.option}>
                <View style={styles.radioButton}>
                    <RadioButton checked={checked} />
                </View>
                <Text style={styles.optionLabel}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RadioButtonOption;
