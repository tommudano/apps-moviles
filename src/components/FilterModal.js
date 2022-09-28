import React, { useState } from "react";
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
} from "react-native";
import FilterTextInput from "./FilterTextInput";
import FilterDropDownCheckboxes from "./FilterDropDownCheckboxes";
import styles from "../styles/FilterModalStyles";
import SubmitButton from "./SubmitButton";

const FilterModal = ({
    modalVisible,
    setModalVisible,
    setStoredFilters,
    storedFilters,
    setSavedFilters,
    savedFilters,
}) => {
    const genderFilterOptions = [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
        { label: "Genderless", value: "genderless" },
        { label: "Unknown", value: "unknown" },
    ];

    const statusFilterOptions = [
        { label: "Alive", value: "alive" },
        { label: "Dead", value: "dead" },
        { label: "Unknown", value: "unknown" },
    ];

    const deleteFilters = () => {
        setStoredFilters({});
        setSavedFilters({});
        setModalVisible(false);
    };

    const applyFilters = () => {
        setSavedFilters({ ...storedFilters });
        setModalVisible(false);
        console.log(savedFilters);
    };

    return (
        <Modal transparent={true} animationType='slide' visible={modalVisible}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.filterMenu}>
                        <View style={styles.filterHeader}>
                            <View style={styles.filtersHeaderLeftSide}>
                                <Text style={styles.filterTitle}>Filtros</Text>
                            </View>
                            <View style={styles.filtersHeaderRightSide}>
                                <TouchableOpacity
                                    style={styles.deleteFilters}
                                    onPress={() => deleteFilters()}
                                >
                                    <Image
                                        style={styles.deleteFiltersIcon}
                                        source={require("../../assets/trash-solid.png")}
                                    />
                                    <Text style={styles.deleteFiltersText}>
                                        Clear Filters
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.closeModalButton}>
                                        X
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.filterBody}>
                            <FilterTextInput
                                setStoredFilters={setStoredFilters}
                                value='name'
                                storedFilterValue={storedFilters}
                                filterBy='name'
                            />
                            <FilterTextInput
                                setStoredFilters={setStoredFilters}
                                value='species'
                                storedFilterValue={storedFilters}
                                filterBy='species'
                            />
                            <FilterTextInput
                                setStoredFilters={setStoredFilters}
                                value='type'
                                storedFilterValue={storedFilters}
                                filterBy='type'
                            />
                            <FilterDropDownCheckboxes
                                groupValue='gender'
                                filterOptions={genderFilterOptions}
                                filterBy='gender'
                                setStoredFilters={setStoredFilters}
                                storedFilterValue={storedFilters}
                            />
                            <FilterDropDownCheckboxes
                                groupValue='status'
                                filterOptions={statusFilterOptions}
                                filterBy='status'
                                setStoredFilters={setStoredFilters}
                                storedFilterValue={storedFilters}
                            />
                        </View>
                        <TouchableOpacity onPress={() => applyFilters()}>
                            <View style={styles.buttonContainer}>
                                <SubmitButton textContent='Apply Filters' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default FilterModal;
