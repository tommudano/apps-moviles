import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Checkbox from "./Checkbox";
import styles from "../styles/CheckboxOptionStyles";

const CheckboxOption = ({ key, label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
      <View key={key} style={styles.option}>
        <View style={styles.checkbox}>
          <Checkbox checked={checked} />
        </View>
        <Text style={styles.optionLabel}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckboxOption;
