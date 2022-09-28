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

    const setColor = (livingStatus) => {
        if (livingStatus === "Alive") {
            return "green";
        } else if (livingStatus === "Dead") {
            return "red";
        } else if (livingStatus === "unknown") {
            return "yellow";
        }
    };

    const setSpeciesLogo = (characterSpecies) => {
        if (characterSpecies === "Human") {
            return require("../../assets/human2.png");
        } else if (characterSpecies === "Alien") {
            return require("../../assets/alien.png");
        } else if (characterSpecies === "Humanoid") {
            return require("../../assets/humanoid2.png");
        } else if (characterSpecies === "unknown") {
            return require("../../assets/question.png");
        } else if (characterSpecies === "Poopybutthole") {
            return require("../../assets/poopybutthole.png");
        } else if (characterSpecies === "Mythological Creature") {
            return require("../../assets/mythologicalcreature.png");
        } else if (characterSpecies === "Animal") {
            return require("../../assets/animal2.png");
        } else if (characterSpecies === "Robot") {
            return require("../../assets/robot.png");
        } else if (characterSpecies === "Cronenberg") {
            return require("../../assets/star.png");
        } else if (characterSpecies === "Disease") {
            return require("../../assets/disease.png");
        }
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
                                        backgroundColor: setColor(item.status),
                                        borderTopLeftRadius: 10,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderTopRightRadius: 10,
                                        width: 290,
                                    }}
                                >
                                    <Image
                                        style={{
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                            alignSelf: "flex-end",
                                            width: 270,
                                            height: 260,
                                        }}
                                        source={{ uri: item.image }}
                                    ></Image>
                                    <View style={styles.descripcion}>
                                        <Text style={styles.textoTouchable}>
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                flex: 1,
                                                fontSize: 20,
                                                alignSelf: "flex-end",
                                                marginRight: 20,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginBottom: 15,
                                            }}
                                        >
                                            {item.species}
                                            <Image
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    alignSelf: "flex-end",
                                                }}
                                                source={setSpeciesLogo(
                                                    item.species
                                                )}
                                            ></Image>
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
        marginLeft: 40,
    },
    descripcion: {
        backgroundColor: "white",
        flex: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 64.44,
        width: 270,
        alignSelf: "flex-end",
    },
    footer: {
        height: 50,
    },
});
