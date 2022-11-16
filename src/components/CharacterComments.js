import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/CharacterCommentsStyles";
import CommentsButton from "./CommentsButton";
import colors from "./constants/colors";
import { ref, set, push, getDatabase, onValue } from "firebase/database";
import CommentsModal from "./CommentsModal";

const CharacterComments = ({ characterId }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(false); // ACTIVITY INDICATOR
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

    const loadComments = async () => {
        try {
            const db = getDatabase();
            const dbRef = ref(db, `favourites/${characterId}/comments`);
            onValue(dbRef, async (snapshot) => {
                let comments = [];
                let dataDB = await snapshot.val();
                if (dataDB) {
                    Object.keys(dataDB).forEach((id) => {
                        comments.push(dataDB[id].comment);
                    });
                    setComments([...comments]);
                } else {
                    setComments([]);
                }
            });
            return true;
        } catch (error) {
            console.log(error.message);
        }
    };

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

    const displayComments = async () => {
        await loadComments();
        setCommentsVisible(true);
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
                <TouchableOpacity
                    style={styles.buttonTouchable}
                    onPress={() => displayComments()}
                >
                    <CommentsButton
                        text='View Comments'
                        color={colors.radioButtonColor}
                    />
                </TouchableOpacity>
            </View>
            <CommentsModal
                visible={commentsVisible}
                setModalVisible={setCommentsVisible}
                comments={comments}
            />
        </View>
    );
};

export default CharacterComments;
