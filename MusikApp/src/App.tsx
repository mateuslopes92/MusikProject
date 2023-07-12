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

const App: React.FC = () => {
  const [tracks, setTracks] = useState<TrackProps[]>([] as TrackProps[]);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const onTrackItemPress = async (track: Track) => {
    await TrackPlayer.pause();
    await TrackPlayer.reset();
    setSelectedTrack(track);
  };

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    const currentTrackId = await TrackPlayer.getCurrentTrack();
    console.log(currentTrackId, prevOrNext);
    if (!currentTrackId) {
      return;
    }
    const trkIndex = tracks.findIndex(trk => trk.id === currentTrackId);

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

      setTracks(response.data);
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
      <ScrollView style={{paddingHorizontal: 18}}>
        <StatusBar barStyle="light-content" />
        <Header />
        <List data={tracks} title="Featured" onPressItem={onTrackItemPress} />
        <List data={tracks} title="New" onPressItem={onTrackItemPress} />
      </ScrollView>
      <Player track={selectedTrack} playNextPrev={playNextPrev} />
    </Container>
  );
};

export default App;
