import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/BaseScreenStyles";
import Menu from "../components/Menu";
import FilterModal from "../components/FilterModal";

const BaseScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [storedFilters, setStoredFilters] = useState({});
  const [savedFilters, setSavedFilters] = useState({});

  return (
    <View style={styles.baseBackground}>
      <Menu setModalVisible={setModalVisible} />
      <FilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setStoredFilters={setStoredFilters}
        storedFilters={storedFilters}
        setSavedFilters={setSavedFilters}
        savedFilters={savedFilters}
      />
    </View>
  );
};

export default BaseScreen;
