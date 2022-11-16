import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../styles/MenuStyles";
import { useSelector, useDispatch } from "react-redux";
import { setFilterModalVisiblity } from "../reducers/filterModalVisibilityReducer";

const Menu = () => {
    const dispatch = useDispatch();
    return (
        <View style={styles.navBar}>
            <Image
                style={styles.apiLogo}
                source={require("../../assets/APILogo.png")}
            />
            <TouchableWithoutFeedback
                onPress={() => dispatch(setFilterModalVisiblity(true))}
            >
                <Image
                    style={styles.filterLogo}
                    source={require("../../assets/filter-solid.png")}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Menu;
