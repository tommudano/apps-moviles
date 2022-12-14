import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    baseBackground: {
        backgroundColor: colors.appBackground,
        flex: 1,
        height: "100%",
    },
    flatList: {
        width: "90%",
        height: "100%",
    },
    flatListContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});

export default styles;
