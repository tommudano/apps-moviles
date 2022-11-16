import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/CommentsButtonStyles";

const CommentsButton = ({ text, color }) => {
    return (
        <View style={[styles.button, { backgroundColor: color }]}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    );
};

export default CommentsButton;
