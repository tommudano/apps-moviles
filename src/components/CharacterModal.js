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
import metaDataForStatus from "./constants/statusValues";
import speciesValues from "../../utils/speciesValues";
import CharacterComments from "./CharacterComments";
import { ref, set, push, getDatabase } from "firebase/database";
import { useEffect } from "react";

const CharacterModal = ({
    visible,
    character,
    setCharacterModalVisibility,
    hasComments,
}) => {
    const firstLetterToUpperCase = (word) => {
        let firstLetterUpperCase = word.charAt(0).toUpperCase();
        return firstLetterUpperCase + word.slice(1);
    };

    useEffect(() => {
        async function logHistory() {
            if (visible) {
                try {
                    const db = getDatabase();
                    let objectHistoryId = await push(ref(db, `/history/`));
                    await set(ref(db, `/history/${objectHistoryId.key}`), {
                        event: `Viewed ${character.name}'s card`,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        }
        logHistory();
    }, [visible]);

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
                                        source={speciesValues.setSpeciesLogo(
                                            character.species
                                        )}
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
                            {hasComments ? (
                                <CharacterComments
                                    characterId={character.id}
                                    characterName={character.name}
                                />
                            ) : null}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default CharacterModal;
