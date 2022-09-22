import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/BaseScreenStyles";
import Menu from "../components/Menu"
import FilterModal from "../components/FilterModal";

const BaseScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.baseBackground}>
            <Menu setModalVisible={setModalVisible}/>
            <FilterModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

export default BaseScreen