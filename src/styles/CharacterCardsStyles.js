import { StyleSheet, Dimensions } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    characterName: {
        fontSize: 20,
        fontWeight: "700",
    },
    description: {
        fontFamily: "Roboto",
        padding: 20,
    },
    container: {
        width: "100%",
        alignItems: "center",
    },
    cardContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: colors.shadowColor,
        elevation: 20,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
    },
    sideStatus: {
        flex: 0.1,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    statusText: {
        fontFamily: "Roboto",
        position: "absolute",
        letterSpacing: 1.2,
        color: colors.statusTextColor,
        fontWeight: "700",
        transform: [{ rotateZ: "-90deg" }],
    },
    mainContent: {
        flex: 0.9,
        flexDirection: "column",
        backgroundColor: colors.cardBackgroundColor,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    characterImage: {
        width: "100%",
        height: Dimensions.get("window").height * 0.3,
        borderTopRightRadius: 10,
    },
    saveToFavouritesImage: {
        width: 50,
        height: 50,
    },
    saveToFavouritesContainer: {
        position: "absolute",
        top: 0,
        right: "10%",
        margin: 10,
    },
});

export default styles;
