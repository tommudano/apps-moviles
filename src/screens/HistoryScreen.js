import React, { useEffect } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styles from "../styles/HistoryScreenStyles";
import MenuFavorites from "../components/MenuFavorites";
import { ref, onValue, getDatabase } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { setHistoryReducer } from "../reducers/historyReducer";
import HistoryLog from "../components/HistoryLog";

const HistoryScreen = () => {
    const dispatch = useDispatch();
    const loadHistory = async () => {
        try {
            const db = getDatabase();
            const dbRef = ref(db, `history`);
            onValue(dbRef, async (snapshot) => {
                let history = [];
                let dataDB = await snapshot.val();
                if (dataDB) {
                    Object.keys(dataDB).forEach((id) => {
                        history.push({ id, event: dataDB[id].event });
                    });
                    dispatch(setHistoryReducer(history));
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        loadHistory();
    }, []);

    let history = useSelector((state) => state.history.value);

    return (
        <View style={styles.baseBackground}>
            <StatusBar backgroundColor='#202329' />
            <MenuFavorites />
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.flatList}
                    data={history}
                    keyExtractor={(character) => character.id}
                    renderItem={({ item }) => <HistoryLog log={item.event} />}
                />
            </View>
        </View>
    );
};

export default HistoryScreen;
