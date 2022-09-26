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
                                { borderTopColor: "#05AA15" },
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
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default CharacterModal;
