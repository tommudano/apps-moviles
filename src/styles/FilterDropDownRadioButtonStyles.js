import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    dropDownContainer: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    dropDownBody: {
        backgroundColor: colors.filterFieldsBackgorund,
        borderColor: colors.filterBorder,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    dropDownInformation: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dropDownDirectionIndicator: {
        height: 25,
        width: 25,
    },
    dropDownTitle: {
        fontSize: 18,
        fontFamily: "Roboto",
        letterSpacing: -0.32,
        fontWeight: "600",
        color: colors.filterTitle,
    },
});

export default styles;
