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
    const [savedFilters, setSavedFilters] = useState({});
    const [loading, setLoading] = useState(false);
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    const [characterToShow, setCharacterToShow] = useState({});
    const [characterModalVisibility, setCharacterModalVisibility] =
        useState(false);
    const [charactersAll, setcharactersAll] = useState([]);
    const [page, setPage] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);
    const [initialRender, setInitialRender] = useState(true);
    let url = "https://rickandmortyapi.com/api/character";

    const buildFilterURL = () => {
        let filterURL = "";
        Object.keys(savedFilters).forEach((filter) => {
            filterURL += `&${filter}=${savedFilters[filter]}`;
        });
        return filterURL;
    };

    const reloadAllCharacters = async () => {
        setLoading(true);
        setPage(2);
        let filterURL = buildFilterURL();
        console.log("first NO RENDER");
        await fetch(`${url}?page=1${filterURL}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.results.length > 0) {
                    setcharactersAll([...data.results]);
                } else {
                    setIsListEnd(true);
                }
            })
            .catch((error) => {
                console.error(error);
            });
        setLoading(false);
    };

    const loadAllCharacters = async () => {
        if (!isListEnd) {
            let filterURL = buildFilterURL();
            console.log(`${url}?page=${page}${filterURL}`);
            await fetch(`${url}?page=${page}${filterURL}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.results.length > 0) {
                        setPage(page + 1);
                        setcharactersAll([...charactersAll, ...data.results]);
                    } else {
                        setIsListEnd(true);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        setLoading(false);
    };

    useEffect(() => {
        loadAllCharacters();
    }, []);

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
        } else {
            console.log("IN");
            reloadAllCharacters();
        }
    }, [savedFilters]);

    const showCharacter = async (characterId) => {
        await fetch(`${url}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacterToShow(data);
                setCharacterModalVisibility(true);
            });
        setLoadingCharacter(false);
    };

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
            <FlatList
                characters={charactersAll}
                loading={loading}
                showCharacter={showCharacter}
                endReached={loadAllCharacters}
                endReachedThreshold={8}
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
