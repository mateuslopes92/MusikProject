import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { Track } from 'react-native-track-player';
import { TrackProps } from '../../App';
import { styles } from './styles';

type ListProps = {
  data: TrackProps[];
  title: string;
  onPressItem: (item: Track) => {};
};

const List: React.FC<ListProps> = ({data, title, onPressItem}) => {
  const renderItems = (item: Track | TrackProps) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.cardItemContainer}>
        <Image
          style={styles.cardArtwork}
          source={{uri: String(item?.artwork)}}
          resizeMode="contain"
        />
        <Text style={styles.cardItemArtist}>{item.artist}</Text>
        <Text style={styles.cardItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.musicListContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map(item => {
          return renderItems(item);
        })}
      </ScrollView>
    </View>
  );
};

export default List;
