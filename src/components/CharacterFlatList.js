import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import CharacterCard from "../components/CharacterCard";
import styles from "../styles/CharacterFlatListStyles";

const CharacterFlatList = ({
    setFlatListRef,
    isListEnd,
    characters,
    setCharacters,
    showCharacter,
    endReached,
    endReachedThreshold,
    isFavourite,
}) => {
    const removeFromList = (id) => {
        setCharacters([
            ...characters.filter((character) => character.id !== id),
        ]);
    };

    const FlatListItemSeparator = () => {
        return <View style={styles.separator}></View>;
    };

    const renderFooter = () => (
        <View style={styles.footer}>
            {isListEnd === false ? (
                <ActivityIndicator
                    color='black'
                    style={styles.activityIndicator}
                />
            ) : null}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.flatList}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    ListHeaderComponent={FlatListItemSeparator}
                    data={characters}
                    keyExtractor={(character) => character.id}
                    renderItem={({ item }) => (
                        <CharacterCard
                            item={item}
                            showCharacter={showCharacter}
                            isFavourite={isFavourite}
                            removeFromList={removeFromList}
                        />
                    )}
                    ListFooterComponent={renderFooter}
                    onEndReached={() => endReached()}
                    onEndReachedThreshold={endReachedThreshold}
                    ref={(ref) => setFlatListRef(ref)}
                    extraData={characters}
                />
            </View>
        </View>
    );
};

export default CharacterFlatList;
