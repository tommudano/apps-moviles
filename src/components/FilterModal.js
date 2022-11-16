import React, { useEffect, useState } from "react";
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
} from "react-native";
import FilterTextInput from "./FilterTextInput";
import FilterDropDownRadioButton from "./FilterDropDownRadioButton";
import styles from "../styles/FilterModalStyles";
import SubmitButton from "./SubmitButton";
import {
    genderFilterOptions,
    statusFilterOptions,
} from "./constants/filterValues";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../reducers/storedFilterReducer";
import { loadSavedFilters } from "../reducers/savedFilterReducer";
import { setFilterModalVisiblity } from "../reducers/filterModalVisibilityReducer";

const FilterModal = () => {
    let modalVisible = useSelector(
        (state) => state.filterModalVisibility.value
    );
    let storedFilter = useSelector((state) => state.storedFilter.value);
    const dispatch = useDispatch();

    const deleteFilters = () => {
        dispatch(load({}));
        dispatch(loadSavedFilters({}));
        dispatch(setFilterModalVisiblity(false));
    };

    const applyFilters = () => {
        dispatch(loadSavedFilters(storedFilter));
        dispatch(setFilterModalVisiblity(false));
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
                                    onPress={() =>
                                        dispatch(setFilterModalVisiblity(false))
                                    }
                                >
                                    <Text style={styles.closeModalButton}>
                                        X
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.filterBody}>
                            <FilterTextInput value='name' filterBy='name' />
                            <FilterTextInput
                                value='species'
                                filterBy='species'
                            />
                            <FilterTextInput value='type' filterBy='type' />
                            <FilterDropDownRadioButton
                                groupValue='gender'
                                filterOptions={genderFilterOptions}
                                filterBy='gender'
                            />
                            <FilterDropDownRadioButton
                                groupValue='status'
                                filterOptions={statusFilterOptions}
                                filterBy='status'
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
