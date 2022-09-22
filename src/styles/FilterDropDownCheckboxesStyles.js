import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dropDownContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  dropDownBody: {
    backgroundColor: "#FFFFFF",
    borderColor: "#ACACAC",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  dropDownInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropDownDirectionIndicator: {
    height: 25,
    width: 25,
  },
  dropDownTitle: {
    fontSize: 18,
    fontFamily: "Roboto",
    letterSpacing: -0.32,
    fontWeight: "600",
    color: "#8F8F8F",
  },
});

export default styles;
