import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  musicListContainer: {
    marginTop: 12,
  },
  listTitle: {
    color: 'white',
    fontWeight: '700',
  },
  cardItemContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 170,
    width: 130,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 12,
    justifyContent: 'space-around',
  },
  cardArtwork: {
    width: 110,
    height: 120,
  },
  cardItemTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 8,
  },
  cardItemArtist: {
    color: 'white',
    fontWeight: '300',
    fontSize: 10,
  },
});
