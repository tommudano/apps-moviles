import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    baseBackground: {
        backgroundColor: "#DADADA",
        flex: 1,
        height: "100%",
    },
    loaderContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
