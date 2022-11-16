import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import RadioButton from "./RadioButton";
import styles from "../styles/RadioButtonOptionStyles";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../reducers/storedFilterReducer";

const RadioButtonOption = ({
    groupValue,
    value,
    label,
    setStoredFilters,
    storedFilterValue,
    setOptionSelected,
}) => {
    let storedFilter = useSelector((state) => state.storedFilter.value);
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(storedFilter[groupValue] === value);

    const checkTheOption = () => {
        let filters = { ...storedFilter };
        if (!checked) {
            filters[groupValue] = value;
        } else {
            delete filters[groupValue];
        }

        dispatch(load(filters));
        setChecked(!checked);
        setOptionSelected(label, !checked);
    };

    useEffect(() => {
        setChecked(storedFilter[groupValue] === value);
    }, [storedFilter]);

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
