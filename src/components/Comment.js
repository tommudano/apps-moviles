import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/CommentStyles";

const Comment = ({ comment }) => {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.comment}>
                {">>"} {comment}
            </Text>
        </View>
    );
};

export default Comment;
