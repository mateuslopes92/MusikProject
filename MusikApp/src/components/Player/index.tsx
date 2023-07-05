import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { styles } from './styles';

const Player: React.FC = () => {
  return (
    <View style={styles.playerContainer}>
      <Text>PLAYER</Text>
      <View style={styles.controlContainer}>
        {/* <Icon name="ios-play-skip-back" size={30} color="#FFFFFF" /> */}
        <Icon name="pause" size={30} color="#FFFFFF" />
        {/* <Icon name="ios-play-skip-forward" size={30} color="#FFFFFF" /> */}
      </View>
    </View>
  );
};

export default Player;
