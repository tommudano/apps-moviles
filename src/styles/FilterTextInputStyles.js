import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    textInput: {
        backgroundColor: colors.filterFieldsBackgorund,
        borderColor: colors.filterBorder,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize: 18,
        fontFamily: "Roboto",
        letterSpacing: -0.32,
        fontWeight: "600",
    },
});

export default styles;
