import React from "react";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import CharacterCard from "../components/CharacterCard";
import styles from "../styles/CharacterFlatListStyles";

const CharacterFlatList = ({
    setFlatListRef,
    isListEnd,
    characters,
    showCharacter,
    endReached,
    endReachedThreshold,
    db,
}) => {
    const FlatListItemSeparator = () => {
        return <View style={styles.separator}></View>;
    };

    const renderFooter = () => {
        return isListEnd === false ? (
            <View style={styles.footer}>
                <ActivityIndicator
                    color='black'
                    style={styles.activityIndicator}
                />
            </View>
        ) : null;
    };

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
                            db={db}
                        />
                    )}
                    ListFooterComponent={renderFooter}
                    onEndReached={() => endReached()}
                    onEndReachedThreshold={endReachedThreshold}
                    ref={(ref) => setFlatListRef(ref)}
                />
            </View>
        </View>
    );
};

export default CharacterFlatList;
