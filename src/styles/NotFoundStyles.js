import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    notFoundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    notFoundImage: {
        height: "50%",
        width: "100%",
    },
    notFoundText: {
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: 20,
        color: colors.defaultTextColor,
        letterSpacing: -0.32,
    },
});

export default styles;
