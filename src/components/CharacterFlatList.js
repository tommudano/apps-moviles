import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    Image,
} from "react-native";
import metaDataForStatus from "./constants/statusValues";
import CharacterCard from "../components/CharacterCard";

const CharacterFlatList = ({
    isListEnd,
    characters,
    showCharacter,
    endReached,
    endReachedThreshold,
}) => {
    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 40,
                    width: "100%",
                }}
            ></View>
        );
    };

    const renderFooter = () => {
        return isListEnd === false ? (
            <View style={styles.footer}>
                <ActivityIndicator color='black' style={{ margin: 15 }} />
            </View>
        ) : null;
    };

    return (
        // <SafeAreaView style={styles.areaview}>
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <FlatList
                    style={{
                        width: "100%",
                        height: "100%",
                        flex: 1,
                    }}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    ListHeaderComponent={FlatListItemSeparator}
                    data={characters}
                    keyExtractor={(character) => character.id}
                    renderItem={({ item }) => (
                        <CharacterCard
                        item = {item}
                        showCharacter = {showCharacter}
                        ></CharacterCard>
                    )}
                    ListFooterComponent={renderFooter}
                    onEndReached={() => endReached()}
                    onEndReachedThreshold={endReachedThreshold}
                />
            </View>
        </View>
        // {/* </SafeAreaView> */}
    );
};

export default CharacterFlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        height: 50,
    },
});
