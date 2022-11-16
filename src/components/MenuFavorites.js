import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../styles/MenuStyles";

const MenuFavorites = () => {
    return (
        <View style={styles.navBar}>
            <Image
                style={styles.apiLogo}
                source={require("../../assets/APILogo.png")}
            />
        </View>
    );
};

export default MenuFavorites;
