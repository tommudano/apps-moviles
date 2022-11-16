import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/CharacterCommentsStyles";
import CommentsButton from "./CommentsButton";
import colors from "./constants/colors";
import { ref, set, push, getDatabase } from "firebase/database";

const CharacterComments = ({ characterId }) => {
    const [comment, setComment] = useState("");
    const [disabledSaveButton, setDisabledSetbutton] = useState(
        comment.trim() === ""
    );

    useEffect(() => {
        if (comment.trim() !== "") {
            setDisabledSetbutton(false);
        } else {
            setDisabledSetbutton(true);
        }
    }, [comment]);

    const saveComment = async () => {
        if (comment.trim() !== "") {
            try {
                let db = getDatabase();
                let objectId = await push(
                    ref(db, `/favourites/${characterId}/comments/`)
                );
                await set(
                    ref(
                        db,
                        `/favourites/${characterId}/comments/${objectId.key}`
                    ),
                    {
                        comment,
                    }
                );
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <View stlye={styles.inputContainer}>
            <TextInput
                multiline={true}
                numberOfLines={5}
                style={styles.textInput}
                placeholder={`Leave a comment`}
                placeholderTextColor={colors.defaultTextColor}
                onChangeText={(text) => setComment(text)}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonTouchable}
                    onPress={() => saveComment()}
                    disabled={disabledSaveButton}
                >
                    <CommentsButton
                        text='Save Comment'
                        color={
                            disabledSaveButton
                                ? colors.disabledSubmitButton
                                : colors.submitButton
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTouchable}>
                    <CommentsButton
                        text='View Comments'
                        color={colors.radioButtonColor}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CharacterComments;
