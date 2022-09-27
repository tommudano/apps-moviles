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
    const [characterModalVisibility, setCharacterModalVisibility] = useState(false);
    const [loadingAll, setLoadingAll] = useState(false);
    const [charactersAll, setcharactersAll] = useState([]);
    const [page, setPage] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);
    let url = "https://rickandmortyapi.com/api/character";

    const loadCharacters = async (filtering = "") => {
        await fetch(url + filtering)
            .then((response) => response.json())
            .then((response) => {
                setcharacters(response.results);
            });
        setLoading(false);
    };

    useEffect(() => {
        loadAllCharacters();
    }, []);

    const loadAllCharacters = async () => {
        if (!loadingAll && !isListEnd) {
            setLoadingAll(true);
            await fetch(url + '/?page=' + page)
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.results.length > 0) {
                setPage(page + 1);
                setcharactersAll([...charactersAll, ...responseJson.results]);
                setLoadingAll(false);
              } else {
                setIsListEnd(true);
                setLoadingAll(false);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
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

    /*useEffect(() => {
        loadCharacters();
    }, []);*/

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
                endReached={loadAllCharacters}
                endReachedThreshold={1}
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
