import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontSize: 24,
    color: colors.white,
  },
  userImg: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
});
