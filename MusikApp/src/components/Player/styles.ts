import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  playerContainer: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 64,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: -35,
    flex: 1,
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
  trackArtist: {
    fontSize: 10,
    color: colors.white,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '40%',
  },
  sliderContainer: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  timeText: {
    color: colors.white,
  },
});
