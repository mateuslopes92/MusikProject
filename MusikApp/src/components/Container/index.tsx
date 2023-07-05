import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/colors';
import { styles } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={[colors.primary, colors.primaryMedium, colors.primaryLight]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default Container;
