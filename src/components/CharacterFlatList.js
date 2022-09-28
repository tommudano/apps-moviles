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
                        <TouchableOpacity
                            onPress={() => showCharacter(item.id)}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    width: "100%",
                                    alignItems: "center",
                                    marginBottom: 10,
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor:
                                            metaDataForStatus[
                                                item.status.toLowerCase()
                                            ].color,
                                        borderTopLeftRadius: 10,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderTopRightRadius: 10,
                                        width: 290,
                                        height: 430,
                                    }}
                                >
                                    <Image
                                        style={{
                                            borderTopRightRadius: 10,
                                            alignSelf: "flex-end",
                                            justifyContent: "center",
                                            width: "93.1%",
                                            height: "75%",
                                        }}
                                        source={{ uri: item.image }}
                                    ></Image>
                                    <View style={styles.descripcion}>
                                        <Text style={styles.textoTouchable}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
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
    areaview: {
        backgroundColor: "#c2c2c2",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    texto: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 10,
    },
    Texto: {
        fontSize: 30,
    },
    FlatItem: {
        alignSelf: "center",
        fontSize: 30,
        color: "green",
    },
    textoTouchable: {
        fontSize: 24,
        fontWeight: "bold",
    },
    descripcion: {
        backgroundColor: "white",
        flex: 1,
        borderBottomRightRadius: 10,
        height: "25%",
        width: "93.1%",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        height: 50,
    },
});
