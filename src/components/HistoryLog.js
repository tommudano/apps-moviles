import React from "react";
import styles from "../styles/HistoryLogStyles";
import { View, Text } from "react-native";

const HistoryLog = ({ log }) => {
    return (
        <View style={styles.logContainer}>
            <Text style={styles.logContent}>- {log}</Text>
        </View>
    );
};

export default HistoryLog;
