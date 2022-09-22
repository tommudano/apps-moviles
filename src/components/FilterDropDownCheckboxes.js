import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Checkbox from "./Checkbox";
import styles from "../styles/FilterDropDownCheckboxesStyles";

const FilterDropDownCheckboxes = ({ filterBy, filterOptions }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <View style={styles.dropDownContainer}>
      <View style={styles.dropDownBody}>
        <TouchableWithoutFeedback
          onPress={() => setOptionsVisible(!optionsVisible)}
        >
          <View style={styles.dorpDownInformation}>
            <Text style={styles.dropDownTitle}>Filtrar por {filterBy}</Text>
            <Image
              style={styles.dropDownDirectionIndicator}
              source={require("../../assets/angle-down-solid.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.dropDownOptions}>
          {optionsVisible
            ? filterOptions.map(({ label, value }) => (
                <View key={value} style={styles.dropDownOption}>
                  <View style={styles.checkbox}>
                    <Checkbox />
                  </View>
                  <Text style={styles.optionLabel}>{label}</Text>
                </View>
              ))
            : null}
        </View>
      </View>
    </View>
  );
};

export default FilterDropDownCheckboxes;
