import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    filterMenu: {
        width: "90%",
        height: "70%",
        backgroundColor: "#D9D9D9",
        borderRadius: 20
    },
    filterHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
        marginHorizontal: 20
    },
    filtersHeaderLeftSide: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 0.4
    },
    filterTitle: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 26,
        color: "#26272C",
        letterSpacing: -0.32
    },
    filtersHeaderRightSide: {
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    deleteFilters: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    deleteFiltersIcon: {
        height: 40,
        width: 40
    },
    deleteFiltersText: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 20,
        color: "#747474",
        letterSpacing: -0.32
    },
    closeModalButton: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 18,
        color: "#26272C",
        letterSpacing: -0.32
    }
})

export default styles