import { StyleSheet } from "react-native";
import colors from "../components/constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
        //justifyContent: "center",
        alignItems: "center",
        marginTop: 75,
        marginLeft: 15,
        marginRight: 15,
    },
    baseBackground: {
        backgroundColor: colors.appBackground,
        flex: 1,
        height: "100%",
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold"
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 25
    },
    texto:{
        fontSize: 15,
        marginTop: 10
    }
});

export default styles;