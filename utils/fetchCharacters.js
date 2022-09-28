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
        setcharactersAll
    ) => {
        setLoading(true);
        setPage(2);
        let filterURL = buildFilterURL(savedFilters);

        await fetch(`${url}?page=1${filterURL}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setNotFound(false);
                    setcharactersAll([...data.results]);
                } else {
                    setNotFound(true);
                }
            })
            .catch((error) => console.log(error));
        setLoading(false);
    };

    const loadAllCharacters = async (
        isListEnd,
        savedFilters,
        page,
        setPage,
        setcharactersAll,
        charactersAll,
        setIsListEnd,
        setLoading
    ) => {
        if (!isListEnd) {
            let filterURL = buildFilterURL(savedFilters);
            await fetch(`${url}?page=${page}${filterURL}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.results && data.results.length > 0) {
                        setPage(page + 1);
                        setcharactersAll([...charactersAll, ...data.results]);
                    } else {
                        setIsListEnd(true);
                    }
                })
                .catch((error) => console.log(error));
        }
        setLoading(false);
    };

    const showCharacter = async (
        characterId,
        setLoadingCharacter,
        setCharacterToShow,
        setCharacterModalVisibility,
        setDisplayCharacter
    ) => {
        setLoadingCharacter(true);
        await fetch(`${url}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacterToShow(data);
                setCharacterModalVisibility(true);
                setDisplayCharacter(true);
            })
            .catch((error) => console.log(error));
        setLoadingCharacter(false);
    };

    return {
        reloadAllCharacters,
        showCharacter,
        loadAllCharacters,
    };
})();

export default fetchCharacters;
