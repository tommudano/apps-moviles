import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "../styles/HomeScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";
import FlatList from "../components/FlatList";

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [storedFilters, setStoredFilters] = useState({});
    const [characters, setcharacters] = useState();
    const [loading, setLoading] = useState(true);
    let url = "https://rickandmortyapi.com/api/character";

    const loadCharacters = (filtering = "") => {
        fetch(url + filtering)
            .then((response) => response.json())
            .then((response) => {
                setcharacters(response.results);
                setLoading(false);
            });
    };

    useEffect(() => {
        loadCharacters();
    }, []);

    return (
        <View style={styles.baseBackground}>
            <Menu setModalVisible={setModalVisible} />
            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setStoredFilters={setStoredFilters}
                storedFilters={storedFilters}
                loadCharacters={loadCharacters}
            />
            <FlatList characters={characters} loading={loading} />
        </View>
    );
};

export default HomeScreen;
