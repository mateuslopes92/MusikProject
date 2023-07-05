import { Image, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.userImg}
          source={{ uri: 'https://e-cdn-images.dzcdn.net/images/artist/cc5c08cb2bf6d887fc43e85e84a67b35/264x264-000000-80-0-0.jpg' }}
          resizeMode='contain'
        />
      <Text style={styles.appTitle}>Musik</Text>
      <Text style={styles.appTitle}>Mu</Text>
    </View>
  )
}

export default Header;