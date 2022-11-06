import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import metaDataForStatus from "./constants/statusValues";
import styles from "../styles/CharacterCardsStyles";

const CharacterCard = ({ item, showCharacter }) => {
    const firstLetterToUpperCase = (word) => {
        let firstLetterUpperCase = word.charAt(0).toUpperCase();
        return firstLetterUpperCase + word.slice(1);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showCharacter(item.id)}>
                <View style={styles.cardContainer}>
                    <View
                        style={[
                            styles.sideStatus,
                            {
                                backgroundColor:
                                    metaDataForStatus[item.status.toLowerCase()]
                                        .color,
                            },
                        ]}
                    >
                        <Text style={styles.statusText}>
                            {firstLetterToUpperCase(item.status)}
                        </Text>
                    </View>
                    <View style={styles.mainContent}>
                        <Image
                            style={styles.characterImage}
                            source={{ uri: item.image }}
                        ></Image>
                        <View style={styles.description}>
                            <Text style={styles.characterName}>
                                {item.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CharacterCard;
