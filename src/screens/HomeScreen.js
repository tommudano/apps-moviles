import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "../styles/HomeScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";
import FlatList from "../components/FlatList";
import CharacterModal from "../components/CharacterModal";

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [storedFilters, setStoredFilters] = useState({});
    const [characters, setcharacters] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    const [characterToShow, setCharacterToShow] = useState({});
    const [characterModalVisibility, setCharacterModalVisibility] =
        useState(false);
    let url = "https://rickandmortyapi.com/api/character";

    const loadCharacters = async (filtering = "") => {
        await fetch(url + filtering)
            .then((response) => response.json())
            .then((response) => {
                setcharacters(response.results);
            });
        setLoading(false);
    };

    const showCharacter = async (characterId) => {
        await fetch(`${url}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacterToShow(data);
                setCharacterModalVisibility(true);
            });
        setLoadingCharacter(false);
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
            <FlatList
                characters={characters}
                loading={loading}
                showCharacter={showCharacter}
            />
            {loadingCharacter ? null : (
                <CharacterModal
                    visible={characterModalVisibility}
                    character={characterToShow}
                    setCharacterModalVisibility={setCharacterModalVisibility}
                />
            )}
        </View>
    );
};

export default HomeScreen;
