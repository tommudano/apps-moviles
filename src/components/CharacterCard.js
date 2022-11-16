import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import metaDataForStatus from "./constants/statusValues";
import styles from "../styles/CharacterCardsStyles";
import { ref, set, push, getDatabase, remove } from "firebase/database";
//import AnimateCard from './animation/addToFavsAnimation';

const CharacterCard = ({
    item,
    showCharacter,
    isFavourite,
    removeFromList,
}) => {
    const value = useState(new Animated.Value(0))[0];
    const size = useState(new Animated.Value(1))[0];

    const animateCard = () => {
        Animated.parallel([
            Animated.timing(value, {
                toValue: isFavourite ? -500 : 500,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(size, {
                toValue: 0.1,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start(() => handleFavouriteSetting());
    };

    const firstLetterToUpperCase = (word) => {
        let firstLetterUpperCase = word.charAt(0).toUpperCase();
        return firstLetterUpperCase + word.slice(1);
    };

    const handleFavouriteSetting = async () => {
        if (isFavourite) {
            removeFromFavourites();
        } else {
            saveToFavourites();
        }
    };

    const saveToFavourites = async () => {
        try {
            let db = getDatabase();
            await set(ref(db, `/favourites/${item.id}`), {
                name: item.name,
                gender: item.gender,
                image: item.image,
                location: { name: item.location.name },
                origin: { name: item.origin.name },
                species: item.species,
                status: item.status,
                type: item.type,
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const removeFromFavourites = async () => {
        try {
            let db = getDatabase();
            await remove(ref(db, `/favourites/${item.id}`));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [{ translateX: value }, { scale: size }],
                },
            ]}
        >
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
                onPress={async () => {
                    animateCard();
                }}
                style={styles.saveToFavouritesContainer}
            >
                <Image
                    style={styles.saveToFavouritesImage}
                    source={
                        isFavourite
                            ? require("../../assets/savedToFavourites.png")
                            : require("../../assets/heart_border.png")
                    }
                />
            </TouchableOpacity>
        </Animated.View>
    );
};

export default CharacterCard;
