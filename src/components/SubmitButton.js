import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/SubmitButtonStyles";

const SubmitButton = ({ textContent }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{textContent}</Text>
        </View>
    );
};

export default SubmitButton;
