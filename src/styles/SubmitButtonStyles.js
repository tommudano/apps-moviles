import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: colors.submitButton,
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "700",
        color: colors.buttonText,
    },
});

export default styles;
