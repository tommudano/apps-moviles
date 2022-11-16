import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "../styles/FilterDropDownRadioButtonStyles";
import RadioButtonOption from "./RadioButtonOption";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../reducers/storedFilterReducer";

const FilterDropDownRadioButton = ({ groupValue, filterBy, filterOptions }) => {
    let storedFilter = useSelector((state) => state.storedFilter.value);
    const dispatch = useDispatch();

    const getLabel = (key) => {
        let label;
        filterOptions.forEach((option) => {
            if (option.value === key) {
                label = option.label;
            }
        });
        return label;
    };
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [openDropIndicatorRotation, setOpenDropIndicatorRotation] =
        useState("0deg");
    const [filterIndicationText, setFilterIndicationText] = useState(
        storedFilter[groupValue]
            ? getLabel(storedFilter[groupValue])
            : `Filter by ${filterBy}`
    );

    const toggleDropDown = () => {
        setOpenDropIndicatorRotation(optionsVisible ? "0deg" : "180deg");
        setOptionsVisible(!optionsVisible);
    };

    const setOptionSelected = (label, checked) => {
        if (checked) {
            setFilterIndicationText(label);
        } else {
            setFilterIndicationText(`Filter by ${filterBy}`);
        }
    };

    return (
        <View style={styles.dropDownContainer}>
            <View style={styles.dropDownBody}>
                <TouchableWithoutFeedback onPress={() => toggleDropDown()}>
                    <View style={styles.dropDownInformation}>
                        <Text style={styles.dropDownTitle}>
                            {filterIndicationText}
                        </Text>
                        <Image
                            style={[
                                styles.dropDownDirectionIndicator,
                                {
                                    transform: [
                                        { rotateZ: openDropIndicatorRotation },
                                    ],
                                },
                            ]}
                            source={require("../../assets/angle-down-solid.png")}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.dropDownOptions}>
                    {optionsVisible
                        ? filterOptions.map(({ label, value }) => (
                              <RadioButtonOption
                                  key={value}
                                  groupValue={groupValue}
                                  label={label}
                                  value={value}
                                  setOptionSelected={setOptionSelected}
                              />
                          ))
                        : null}
                </View>
            </View>
        </View>
    );
};

export default FilterDropDownRadioButton;
