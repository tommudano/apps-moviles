import { ref, getDatabase, onValue } from "firebase/database";
import React from "react";

const fetchCharacters = (() => {
    let url = "https://rickandmortyapi.com/api/character";

    const buildFilterURL = (savedFilters) => {
        let filterURL = "";
        Object.keys(savedFilters).forEach((filter) => {
            filterURL += `&${filter}=${savedFilters[filter]}`;
        });
        return filterURL;
    };

    const reloadAllCharacters = async (
        setLoading,
        setPage,
        savedFilters,
        setNotFound,
        setcharactersAll,
        dispatch
    ) => {
        dispatch(setLoading(true));
        setPage(2);
        let filterURL = buildFilterURL(savedFilters);

        await fetch(`${url}?page=1${filterURL}`)
            .then((response) => response.json())
            .then((data) => {
                const db = getDatabase();
                const dbRef = ref(db, "/favourites");
                onValue(dbRef, async (snapshot) => {
                    let favouriteCharacterIds = [];
                    let processedData;
                    if (snapshot.val()) {
                        favouriteCharacterIds = Object.keys(snapshot.val()).map(
                            (id) => Number(id)
                        );
                    }

                    if (data.results) {
                        processedData = data.results.filter((character) => {
                            return (
                                character &&
                                favouriteCharacterIds.indexOf(character.id) ===
                                    -1
                            );
                        });
                    }
                    if (processedData && processedData.length > 0) {
                        setNotFound(false);
                        setcharactersAll([...processedData]);
                    } else {
                        setNotFound(true);
                    }
                });
            })
            .catch((error) => console.log(error));
        dispatch(setLoading(false));
    };

    const loadAllCharacters = async (
        isListEnd,
        savedFilters,
        page,
        setPage,
        setcharactersAll,
        charactersAll,
        setIsListEnd,
        setLoading,
        dispatch
    ) => {
        if (!isListEnd) {
            let filterURL = buildFilterURL(savedFilters);
            await fetch(`${url}?page=${page}${filterURL}`)
                .then((response) => response.json())
                .then((data) => {
                    const db = getDatabase();
                    const dbRef = ref(db, "/favourites");
                    onValue(dbRef, async (snapshot) => {
                        let favouriteCharacterIds = [];
                        if (snapshot.val()) {
                            favouriteCharacterIds = Object.keys(
                                snapshot.val()
                            ).map((id) => Number(id));
                        }
                        let dataToProcess = charactersAll.concat(data.results);
                        let processedData = dataToProcess.filter(
                            (character) => {
                                return (
                                    character &&
                                    favouriteCharacterIds.indexOf(
                                        character.id
                                    ) === -1
                                );
                            }
                        );

                        if (
                            data.results &&
                            data.results.length > 0 &&
                            processedData.length > 0
                        ) {
                            setPage(page + 1);
                            setcharactersAll([...processedData]);
                        } else {
                            setIsListEnd(true);
                        }
                    });
                })
                .catch((error) => console.log(error));
        }
        dispatch(setLoading(false));
    };

    const showCharacter = async (
        characterId,
        setLoadingCharacter,
        setCharacterToShow,
        setCharacterModalVisibility,
        setDisplayCharacter,
        dispatch
    ) => {
        setLoadingCharacter(true);
        await fetch(`${url}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCharacterToShow(data));
                setCharacterModalVisibility(true);
                dispatch(setDisplayCharacter(true));
            })
            .catch((error) => console.log(error));
        setLoadingCharacter(false);
    };

    const loadAllFavouriteCharacters = (
        setAllFavouriteCharacters,
        setLoading
    ) => {
        const db = getDatabase();
        const dbRef = ref(db, "/favourites");
        onValue(dbRef, async (snapshot) => {
            let characters = [];
            let charactersFromSnapshot = snapshot.val();
            if (charactersFromSnapshot) {
                let characterIds = Object.keys(charactersFromSnapshot);
                if (characterIds.length > 0) {
                    characterIds.forEach((characterId) => {
                        let character = charactersFromSnapshot[characterId];
                        character.id = characterId;
                        characters.push(character);
                    });
                    setAllFavouriteCharacters([...characters]);
                }
            } else {
                setAllFavouriteCharacters([]);
            }
        });
        setLoading(false);
    };

    return {
        reloadAllCharacters,
        showCharacter,
        loadAllCharacters,
        loadAllFavouriteCharacters,
    };
})();

export default fetchCharacters;
