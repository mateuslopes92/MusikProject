import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  playerContainer: {
    paddingHorizontal: 18,
    backgroundColor: 'rgba(0,0,0)',
    // borderTopColor: colors.white,
    // borderTopWidth: 0.3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 90,
    marginBottom: -35,
  },
  controlContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
  },
});
