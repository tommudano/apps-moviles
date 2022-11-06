import React from "react";
import { View } from "react-native";
import styles from "../styles/RadioButtonStyles";

const RadioButton = ({ checked }) => {
    return (
        <View style={styles.radioButton}>
            {checked ? <View style={styles.checked}></View> : null}
        </View>
    );
};

export default RadioButton;
