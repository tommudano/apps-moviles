import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
import styles from "../styles/HomeScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";
import CharacterFlatList from "../components/CharacterFlatList";
import CharacterModal from "../components/CharacterModal";
import NotFound from "../components/NotFound";
import fetchCharacters from "../../utils/fetchCharacters";

const FavouritesScreen = () => {
    const [flatListRef, setFlatListRef] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [storedFilters, setStoredFilters] = useState({});
    const [savedFilters, setSavedFilters] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingCharacter, setLoadingCharacter] = useState(false);
    const [displayCharacter, setDisplayCharacter] = useState(false);
    const [characterToShow, setCharacterToShow] = useState({});
    const [characterModalVisibility, setCharacterModalVisibility] =
        useState(false);
    const [allFavouriteCharacters, setAllFavouriteCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [initialRender, setInitialRender] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const loadAllFavouriteCharacters = () => {
        fetchCharacters.loadAllFavouriteCharacters(
            setAllFavouriteCharacters,
            setLoading
        );
    };

    const showCharacter = (characterId) => {
        // fetchCharacters.showCharacter(
        //     characterId,
        //     setLoadingCharacter,
        //     setCharacterToShow,
        //     setCharacterModalVisibility,
        //     setDisplayCharacter
        // );
    };

    const moveFlatListToTop = () =>
        flatListRef.scrollToOffset({ offset: 0, animated: true });

    useEffect(() => {
        loadAllFavouriteCharacters();
    }, []);

    return (
        <View style={styles.baseBackground}>
            <StatusBar backgroundColor='#202329' />
            <Menu setModalVisible={setModalVisible} />
            {loading || loadingCharacter ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator
                        size='large'
                        color='#00ff00'
                        animating={loading || loadingCharacter}
                    />
                </View>
            ) : null}
            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setStoredFilters={setStoredFilters}
                storedFilters={storedFilters}
                setSavedFilters={setSavedFilters}
            />
            {notFound ? (
                <NotFound />
            ) : (
                <CharacterFlatList
                    setFlatListRef={setFlatListRef}
                    characters={allFavouriteCharacters}
                    showCharacter={showCharacter}
                    endReached={loadAllFavouriteCharacters}
                    endReachedThreshold={8}
                    isListEnd={true}
                    isFavourite={true}
                />
            )}
            {displayCharacter ? (
                <CharacterModal
                    visible={characterModalVisibility}
                    character={characterToShow}
                    setCharacterModalVisibility={setCharacterModalVisibility}
                />
            ) : null}
        </View>
    );
};

export default FavouritesScreen;
