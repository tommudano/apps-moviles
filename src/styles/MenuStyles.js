import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    apiLogo: {
        height: 65,
        width: 65,
    },
    filterLogo: {
        height: 55,
        width: 55,
    },
    navBar: {
        backgroundColor: colors.menuBackgorund,
        height: 85,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: colors.shadowColor,
        elevation: 20,
        zIndex: 2,
    },
});

export default styles;
