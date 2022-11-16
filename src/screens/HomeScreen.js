import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
import styles from "../styles/HomeScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";
import CharacterFlatList from "../components/CharacterFlatList";
import CharacterModal from "../components/CharacterModal";
import NotFound from "../components/NotFound";
import fetchCharacters from "../../utils/fetchCharacters";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayCharacter } from "../reducers/displayCharacterReducer";
import { setHomeScreenLoading } from "../reducers/homeScreenLoadingReducer";
import { setCharacterToShow } from "../reducers/characterToShowReducer";

const HomeScreen = () => {
    const [flatListRef, setFlatListRef] = useState();
    const [loadingCharacter, setLoadingCharacter] = useState(false);
    const [characterModalVisibility, setCharacterModalVisibility] =
        useState(false);
    const [charactersAll, setcharactersAll] = useState([]);
    const [page, setPage] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);
    const [initialRender, setInitialRender] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const dispatch = useDispatch();
    let loading = useSelector((state) => state.homeScreenLoading.value);
    let savedFilter = useSelector((state) => state.savedFilter.value);
    let displayCharacter = useSelector((state) => state.displayCharacter.value);
    let characterToShow = useSelector((state) => state.characterToShow.value);

    const loadAllCharacters = () => {
        setIsListEnd(false);
        fetchCharacters.loadAllCharacters(
            isListEnd,
            savedFilter,
            page,
            setPage,
            setcharactersAll,
            charactersAll,
            setIsListEnd,
            setHomeScreenLoading,
            dispatch
        );
    };

    const showCharacter = (characterId) => {
        fetchCharacters.showCharacter(
            characterId,
            setLoadingCharacter,
            setCharacterToShow,
            setCharacterModalVisibility,
            setDisplayCharacter,
            dispatch
        );
    };

    const moveFlatListToTop = () => {
        if (flatListRef) {
            flatListRef.scrollToOffset({ offset: 0, animated: true });
        }
    };

    useEffect(() => {
        loadAllCharacters();
    }, []);

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
        } else {
            setIsListEnd(false);
            fetchCharacters.reloadAllCharacters(
                setHomeScreenLoading,
                setPage,
                savedFilter,
                setNotFound,
                setcharactersAll,
                dispatch
            );
            moveFlatListToTop();
        }
    }, [savedFilter]);

    return (
        <View style={styles.baseBackground}>
            <StatusBar backgroundColor='#202329' />
            <Menu />
            {loading || loadingCharacter ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator
                        size='large'
                        color='#00ff00'
                        animating={loading || loadingCharacter}
                    />
                </View>
            ) : null}
            <FilterModal />
            {notFound ? (
                <NotFound />
            ) : (
                <CharacterFlatList
                    setFlatListRef={setFlatListRef}
                    characters={charactersAll}
                    setCharacters={setcharactersAll}
                    showCharacter={showCharacter}
                    endReached={loadAllCharacters}
                    endReachedThreshold={8}
                    isListEnd={isListEnd}
                    isFavourite={false}
                />
            )}
            {displayCharacter ? (
                <CharacterModal
                    visible={characterModalVisibility}
                    character={characterToShow}
                    setCharacterModalVisibility={setCharacterModalVisibility}
                    hasComments={false}
                />
            ) : null}
        </View>
    );
};

export default HomeScreen;
