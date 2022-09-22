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
  dorpDownInformation: {
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
    fontWeight: "700",
    color: "#8F8F8F",
  },
  dropDownOptions: {
    marginTop: 10,
  },
  dropDownOption: {
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  optionLabel: {
    fontSize: 18,
    fontFamily: "Roboto",
    letterSpacing: -0.32,
    fontWeight: "700",
    color: "#26272C",
    marginLeft: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
