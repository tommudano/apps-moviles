import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/HomeScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";
import FlatList from "../components/FlatList";

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [storedFilters, setStoredFilters] = useState({});
    const [savedFilters, setSavedFilters] = useState({});

    return (
        <View style={styles.baseBackground}>
            <Menu setModalVisible={setModalVisible} />
            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setStoredFilters={setStoredFilters}
                storedFilters={storedFilters}
                setSavedFilters={setSavedFilters}
                savedFilters={savedFilters}
            />
            <FlatList />
        </View>
    );
};

export default HomeScreen;
