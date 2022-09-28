import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/NotFoundStyles";

const NotFound = () => {
    return (
        <View style={styles.notFoundContainer}>
            <Image
                source={require("../../assets/notFound.png")}
                style={styles.notFoundImage}
            />
            <Text style={styles.notFoundText}>No results were found</Text>
        </View>
    );
};

export default NotFound;
