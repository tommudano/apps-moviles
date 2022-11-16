import React from "react";
import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/CommentsModalStyles";
import CommentsList from "./CommentsList";

const CommentsModal = ({ visible, setModalVisible, comments }) => {
    return (
        <Modal transparent={true} animationType='slide' visible={visible}>
            <View style={styles.container}>
                <View style={styles.commentsMain}>
                    <View style={styles.commentsHeader}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeModalButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commentsBody}>
                        <CommentsList comments={comments} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CommentsModal;
