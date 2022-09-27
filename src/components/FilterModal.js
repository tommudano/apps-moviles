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
        { label: "Femenino", value: "female" },
        { label: "Masculino", value: "male" },
        { label: "Sin Genero", value: "genderless" },
        { label: "Desconocido", value: "unknown" },
    ];

    const statusFilterOptions = [
        { label: "Vivo", value: "alive" },
        { label: "Muerto", value: "dead" },
        { label: "Desconocido", value: "unknown" },
    ];

    const deleteFilters = () => {
        setStoredFilters({});
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
                                        Eliminar Filtros
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
                                filterBy='nombre'
                            />
                            <FilterTextInput
                                setStoredFilters={setStoredFilters}
                                value='species'
                                storedFilterValue={storedFilters}
                                filterBy='especie'
                            />
                            <FilterTextInput
                                setStoredFilters={setStoredFilters}
                                value='type'
                                storedFilterValue={storedFilters}
                                filterBy='tipo'
                            />
                            <FilterDropDownCheckboxes
                                groupValue='gender'
                                filterOptions={genderFilterOptions}
                                filterBy='genero'
                                setStoredFilters={setStoredFilters}
                                storedFilterValue={storedFilters}
                            />
                            <FilterDropDownCheckboxes
                                groupValue='status'
                                filterOptions={statusFilterOptions}
                                filterBy='estado'
                                setStoredFilters={setStoredFilters}
                                storedFilterValue={storedFilters}
                            />
                        </View>
                        <TouchableOpacity onPress={() => applyFilters()}>
                            <View style={styles.buttonContainer}>
                                <SubmitButton textContent='Aplicar Filtros' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default FilterModal;
