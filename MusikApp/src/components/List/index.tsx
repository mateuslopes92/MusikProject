import { Image, ScrollView, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const List: React.FC = ({
  data,
  title
}) => {
  const renderItems = (item) => {
    return (
      <View style={styles.cardItemContainer}>
        <Image
          style={styles.cardArtwork}
          source={{ uri: item.artwork }}
          resizeMode='contain'
        />
        <Text style={styles.cardItemArtist}>{item.artist}</Text>
        <Text style={styles.cardItemTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.musicListContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) => {
          return renderItems(item);
        })}
      </ScrollView>
    </View>
  );
};

export default List;
