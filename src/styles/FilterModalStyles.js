import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    filterMenu: {
        width: "90%",
        backgroundColor: colors.modalBodyBackgorund,
        borderRadius: 20,
        marginTop: 90,
        marginBottom: 20,
        paddingTop: 30,
        paddingBottom: 50,
        justifyContent: "center",
    },
    filterHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    filtersHeaderLeftSide: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 0.4,
    },
    filterTitle: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 24,
        color: colors.defaultTextColor,
        letterSpacing: -0.32,
    },
    filtersHeaderRightSide: {
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    deleteFilters: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    deleteFiltersIcon: {
        height: 30,
        width: 30,
    },
    deleteFiltersText: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 18,
        color: colors.deleteFiltersButton,
        letterSpacing: -0.32,
    },
    closeModalButton: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 16,
        color: colors.defaultTextColor,
        letterSpacing: -0.32,
    },
    buttonContainer: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
