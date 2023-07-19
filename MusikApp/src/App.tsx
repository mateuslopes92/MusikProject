import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';

import Container from './components/Container';
import Header from './components/Header';
import List from './components/List';
import Player from './components/Player';
import { api } from './services/api';

export type TrackProps = {
  id: number;
  url: string;
  title: string;
  artist: string;
  artwork: string;
};

type DataProps = {
  featured: TrackProps[];
  new: TrackProps[];
};

const App: React.FC = () => {
  const [data, setData] = useState<DataProps>({} as DataProps);
  const [tracks, setTracks] = useState<TrackProps[]>([] as TrackProps[]);
  const [selectedTrack, setSelectedTrack] = useState<Track | TrackProps | null>(
    null,
  );

  const onTrackItemPress = async (track: Track) => {
    await TrackPlayer.pause();
    await TrackPlayer.reset();
    setSelectedTrack(track);
  };

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    const trkIndex = tracks.findIndex(trk => trk.id === selectedTrack?.id);

    if (prevOrNext === 'next' && trkIndex < tracks.length - 1) {
      onTrackItemPress(tracks[trkIndex + 1]);
    }
    if (prevOrNext === 'prev' && trkIndex > 0) {
      onTrackItemPress(tracks[trkIndex - 1]);
    }
  };

  const getTracks = async () => {
    try {
      const response = await api.get('/all-tracks');

      setData(response.data);
      Object.keys(response.data).map(key => {
        setTracks([...response.data[key]]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setUpPlayer = async () => {
    await TrackPlayer.setupPlayer();
  };

  useEffect(() => {
    getTracks();
    setUpPlayer();
  }, []);

  return (
    <Container>
      <ScrollView style={{ paddingHorizontal: 18 }}>
        <StatusBar barStyle="light-content" />
        <Header />
        {Object.keys(data).map(key => {
          return (
            <List
              key={key}
              data={data[key]}
              title={key}
              onPressItem={onTrackItemPress}
              selectedTrack={selectedTrack}
            />
          );
        })}
      </ScrollView>
      <Player track={selectedTrack} playNextPrev={playNextPrev} />
    </Container>
  );
};

export default App;
