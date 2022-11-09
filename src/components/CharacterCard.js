import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import metaDataForStatus from "./constants/statusValues";
import styles from "../styles/CharacterCardsStyles";
import { ref, set, push, getDatabase } from "firebase/database";

const CharacterCard = ({ item, showCharacter }) => {
    const firstLetterToUpperCase = (word) => {
        let firstLetterUpperCase = word.charAt(0).toUpperCase();
        return firstLetterUpperCase + word.slice(1);
    };

    const saveToFavourites = async () => {
        try {
            let db = getDatabase();
            let image = await fetch(item.image);
            console.log(item.image);
            await set(ref(db, `/favourites/${item.id}`), {
                name: item.name,
                gender: item.gender,
                image: item.image,
                location: item.location.name,
                origin: item.origin.name,
                species: item.species,
                status: item.status,
                type: item.type,
            });
            return objectId.key;
        } catch (error) {
            console.log(error.message);
        }
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
            <TouchableOpacity
                onPress={() => saveToFavourites()}
                style={styles.saveToFavouritesContainer}
            >
                <Image
                    style={styles.saveToFavouritesImage}
                    source={require("../../assets/heart_border.png")}
                    onPress={() => addedToFavorites}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CharacterCard;
