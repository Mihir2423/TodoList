import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  items: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#55BCF666",
    opacity: 0.6,
    marginRight: 10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 12,
  },
});
