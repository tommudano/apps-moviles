import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    baseBackground: {
        backgroundColor: colors.appBackground,
        flex: 1,
        height: "100%",
    },
    loaderContainer: {
        backgroundColor: colors.difuseBackground,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
