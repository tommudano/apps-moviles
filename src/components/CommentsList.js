import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import styles from "../styles/CommentsListStyles";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    const renderItem = ({ item }) => <Comment comment={item} />;

    const renderFooter = () => <View style={styles.footer}></View>;

    return (
        <FlatList
            style={styles.flatList}
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={renderFooter}
        />
    );
};

export default CommentsList;
