import React from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import styles from "../styles/CharacterModalStyles";

const CharacterModal = ({
    visible,
    character,
    setCharacterModalVisibility,
}) => {
    let url = "https://rickandmortyapi.com/api/character";

    const firstLetterToUpperCase = (word) => {
        let firstLetterUpperCase = word.charAt(0).toUpperCase();
        return firstLetterUpperCase + word.slice(1);
    };

    const metaDataForStatus = {
        alive: {
            color: "#05AA15",
            image: require("../../assets/aliveStatus.png"),
        },
        dead: {
            color: "#C61307",
            image: require("../../assets/deadStatus.png"),
        },
        unknown: {
            color: "#9E9E9E",
            image: require("../../assets/unknownStatus.png"),
        },
    };

    return (
        <Modal visible={visible} transparent={true} animationType='slide'>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    setCharacterModalVisibility(false)
                                }
                            >
                                <Text style={styles.closeButton}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={[
                                styles.characterContainer,
                                {
                                    borderTopColor:
                                        metaDataForStatus[
                                            character.status.toLowerCase()
                                        ].color,
                                },
                            ]}
                        >
                            <View>
                                <Image
                                    source={{ uri: character.image }}
                                    style={styles.characterImage}
                                />
                                <View style={styles.characterNameContainer}>
                                    <Text style={styles.characterName}>
                                        {character.name}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.characterInformationContainer}>
                                <View style={styles.characterInformationAspect}>
                                    <Image
                                        style={
                                            styles.characterInformationAspectImage
                                        }
                                        source={
                                            metaDataForStatus[
                                                character.status.toLowerCase()
                                            ].image
                                        }
                                    />
                                    <Text
                                        style={
                                            styles.characterInformationAspectText
                                        }
                                    >
                                        Status:{" "}
                                        {firstLetterToUpperCase(
                                            character.status
                                        )}
                                    </Text>
                                </View>
                                <View style={styles.characterInformationAspect}>
                                    <Image
                                        style={
                                            styles.characterInformationAspectImage
                                        }
                                        source={require("../../assets/species.png")}
                                    />
                                    <Text
                                        style={
                                            styles.characterInformationAspectText
                                        }
                                    >
                                        Species:{" "}
                                        {firstLetterToUpperCase(
                                            character.species
                                        )}
                                    </Text>
                                </View>
                                <View style={styles.characterInformationAspect}>
                                    <Image
                                        style={
                                            styles.characterInformationAspectImage
                                        }
                                        source={require("../../assets/type.png")}
                                    />
                                    <Text
                                        style={
                                            styles.characterInformationAspectText
                                        }
                                    >
                                        Type:{" "}
                                        {character.type !== ""
                                            ? firstLetterToUpperCase(
                                                  character.type
                                              )
                                            : "No type asociated"}
                                    </Text>
                                </View>
                                <View style={styles.characterInformationAspect}>
                                    <Image
                                        style={
                                            styles.characterInformationAspectImage
                                        }
                                        source={require("../../assets/gender.png")}
                                    />
                                    <Text
                                        style={
                                            styles.characterInformationAspectText
                                        }
                                    >
                                        Gender:{" "}
                                        {firstLetterToUpperCase(
                                            character.gender
                                        )}
                                    </Text>
                                </View>
                                <View style={styles.characterInformationAspect}>
                                    <Image
                                        style={
                                            styles.characterInformationAspectImage
                                        }
                                        source={require("../../assets/origin.png")}
                                    />
                                    <Text
                                        style={
                                            styles.characterInformationAspectText
                                        }
                                    >
                                        Origin:{" "}
                                        {firstLetterToUpperCase(
                                            character.origin.name
                                        )}
                                    </Text>
                                </View>
                                <View style={styles.characterInformationAspect}>
                                    <Image
                                        style={
                                            styles.characterInformationAspectImage
                                        }
                                        source={require("../../assets/location.png")}
                                    />
                                    <Text
                                        style={
                                            styles.characterInformationAspectText
                                        }
                                    >
                                        Location:{" "}
                                        {firstLetterToUpperCase(
                                            character.location.name
                                        )}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default CharacterModal;
