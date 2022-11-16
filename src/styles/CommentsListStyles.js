import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: colors.cardBackgroundColor,
        padding: 20,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        borderColor: colors.defaultTextColor,
        borderWidth: 1,
    },
    footer: {
        height: 40,
    },
});

export default styles;
