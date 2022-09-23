import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "../styles/FilterDropDownCheckboxesStyles";
import CheckboxOption from "./CheckboxOption";

const FilterDropDownCheckboxes = ({
  groupValue,
  filterBy,
  filterOptions,
  setStoredFilters,
  storedFilterValue,
}) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [openDropIndicatorRotation, setOpenDropIndicatorRotation] =
    useState("0deg");

  const openDropDown = () => {
    setOpenDropIndicatorRotation(optionsVisible ? "0deg" : "180deg");
    setOptionsVisible(!optionsVisible);
  };

  return (
    <View style={styles.dropDownContainer}>
      <View style={styles.dropDownBody}>
        <TouchableWithoutFeedback onPress={() => openDropDown()}>
          <View style={styles.dropDownInformation}>
            <Text style={styles.dropDownTitle}>Filtrar por {filterBy}</Text>
            <Image
              style={[
                styles.dropDownDirectionIndicator,
                { transform: [{ rotateZ: openDropIndicatorRotation }] },
              ]}
              source={require("../../assets/angle-down-solid.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.dropDownOptions}>
          {optionsVisible
            ? filterOptions.map(({ label, value }) => (
                <CheckboxOption
                  key={value}
                  groupValue={groupValue}
                  label={label}
                  value={value}
                  setStoredFilters={setStoredFilters}
                  storedFilterValue={storedFilterValue}
                />
              ))
            : null}
        </View>
      </View>
    </View>
  );
};

export default FilterDropDownCheckboxes;
