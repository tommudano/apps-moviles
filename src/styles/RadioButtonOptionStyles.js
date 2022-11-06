import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    option: {
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    optionLabel: {
        fontSize: 18,
        fontFamily: "Roboto",
        letterSpacing: -0.32,
        fontWeight: "700",
        color: colors.defaultTextColor,
        marginLeft: 10,
    },
    radioButton: {
        height: 20,
        width: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
