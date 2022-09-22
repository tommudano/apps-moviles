import React from "react";
import { View, Modal, TouchableOpacity, Text, Image } from "react-native";
import FilterTextInput from "./FilterTextInput";
import FilterDropDownCheckboxes from "./FilterDropDownCheckboxes";
import styles from "../styles/FilterModalStyles";

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

const FilterModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.filterMenu}>
          <View style={styles.filterHeader}>
            <View style={styles.filtersHeaderLeftSide}>
              <Text style={styles.filterTitle}>Filtros</Text>
            </View>
            <View style={styles.filtersHeaderRightSide}>
              <TouchableOpacity style={styles.deleteFilters}>
                <Image
                  style={styles.deleteFiltersIcon}
                  source={require("../../assets/trash-solid.png")}
                />
                <Text style={styles.deleteFiltersText}>Eliminar Filtros</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeModalButton}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filterBody}>
            <FilterTextInput filterBy="nombre" />
            <FilterTextInput filterBy="especie" />
            <FilterTextInput filterBy="tipo" />
            <FilterDropDownCheckboxes
              filterOptions={genderFilterOptions}
              filterBy="genero"
            />
            <FilterDropDownCheckboxes
              filterOptions={statusFilterOptions}
              filterBy="estado"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
