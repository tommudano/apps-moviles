import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/CheckboxStyles";

const Checkbox = ({ checked }) => {
    return (
        <View style={styles.checkbox}>
            {checked ? <View style={styles.checked}></View> : null}
        </View>
    );
};

export default Checkbox;
