import { Dimensions, StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    commentsMain: {
        width: "90%",
        backgroundColor: colors.modalBodyBackgorund,
        borderRadius: 20,
        paddingTop: 30,
        paddingBottom: 50,
        justifyContent: "center",
        maxHeight: Dimensions.get("window").height * 0.5,
    },
    commentsHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginHorizontal: 20,
    },
    closeModalButton: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 16,
        color: colors.defaultTextColor,
        letterSpacing: -0.32,
    },
});

export default styles;
