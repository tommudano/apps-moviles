import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    body: {
        marginTop: "97%",
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    characterContainer: {
        width: "90%",
        backgroundColor: "#FFFFFF",
        borderTopWidth: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButtonContainer: {
        alignItems: "flex-end",
        flex: 1,
        width: "90%",
        marginRight: 20,
        marginBottom: 5,
    },
    closeButton: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 16,
        color: "#26272C",
        letterSpacing: -0.32,
    },
    characterImage: {
        width: "100%",
        height: 250,
    },
    characterNameContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 20,
        position: "absolute",
        width: "100%",
        bottom: 0,
    },
    characterName: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 26,
        color: "#FFFFFF",
        letterSpacing: -0.32,
    },
    characterInformationContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    characterInformationAspect: {
        flexDirection: "row",
        marginBottom: 5,
    },
    characterInformationAspectImage: {
        width: 45,
        height: 45,
        marginRight: 5,
    },
    characterInformationAspectText: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 16,
        color: "#26272C",
        letterSpacing: -0.32,
    },
});

export default styles;
