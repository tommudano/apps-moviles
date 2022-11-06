import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    radioButton: {
        height: "100%",
        width: "100%",
        borderColor: colors.radioButtonColor,
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    checked: {
        borderRadius: 100,
        backgroundColor: colors.radioButtonColor,
        height: "70%",
        width: "70%",
    },
});

export default styles;
