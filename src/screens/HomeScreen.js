import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "../styles/HomeScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";
import FlatList from "../components/FlatList";
import CharacterModal from "../components/CharacterModal";
import NotFound from "../components/NotFound";

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
    const [notFound, setNotFound] = useState(false);
    let url = "https://rickandmortyapi.com/api/character";

    const buildFilterURL = () => {
        let filterURL = "";
        Object.keys(savedFilters).forEach((filter) => {
            filterURL += `&${filter}=${savedFilters[filter]}`;
        });
        return filterURL;
    };

    const reloadAllCharacters = () => {
        setLoading(true);
        setPage(2);
        let filterURL = buildFilterURL();

        fetch(`${url}?page=1${filterURL}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setNotFound(false);
                    setcharactersAll([...data.results]);
                } else {
                    setNotFound(true);
                }
            })
            .catch((error) => console.error(error));
        setLoading(false);
    };

    const loadAllCharacters = () => {
        if (!isListEnd) {
            let filterURL = buildFilterURL();
            fetch(`${url}?page=${page}${filterURL}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.results && data.results.length > 0) {
                        setPage(page + 1);
                        setcharactersAll([...charactersAll, ...data.results]);
                    } else {
                        setIsListEnd(true);
                    }
                })
                .catch((error) => console.error(error));
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
            reloadAllCharacters();
        }
    }, [savedFilters]);

    const showCharacter = (characterId) => {
        fetch(`${url}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacterToShow(data);
                setCharacterModalVisibility(true);
            })
            .catch((error) => console.log(error));
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
            {notFound ? (
                <NotFound />
            ) : (
                <FlatList
                    characters={charactersAll}
                    loading={loading}
                    showCharacter={showCharacter}
                    endReached={loadAllCharacters}
                    endReachedThreshold={8}
                />
            )}
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
