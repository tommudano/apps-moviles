import React from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import metaDataForStatus from "./constants/statusValues";
import styles from "../styles/CharacterCardsStyle";


const CharacterCard = ({
    item,
    showCharacter
}) => {
    return(
        <View>
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
    </View>
    );
};

export default CharacterCard;

