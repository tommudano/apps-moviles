import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../styles/MenuStyles";

const Menu = ({setModalVisible}) => {
    return (
        <View style={styles.navBar}>
            <Image style={styles.apiLogo} source={require('../../assets/APILogo.png')}/>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <Image style={styles.filterLogo} source={require('../../assets/filter-solid.png')}/>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Menu