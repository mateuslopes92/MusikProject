import { ScrollView, StatusBar } from 'react-native';

import Container from './components/Container';
import Header from './components/Header';
import List from './components/List';
import Player from './components/Player';
import React from 'react';

const data = [
  {
    id: 1,
    url: '',
    title: 'Vibe',
    artist: 'Matt Flow',
    artwork: 'https://e-cdn-images.dzcdn.net/images/cover/250246017db3172eaf697bd5e921a443/264x264-000000-80-0-0.jpg',
  },
  {
    id: 2,
    url: '',
    title: 'Maior que o teto',
    artist: 'Matt Flow',
    artwork: 'https://e-cdn-images.dzcdn.net/images/artist/cc5c08cb2bf6d887fc43e85e84a67b35/264x264-000000-80-0-0.jpg',
  },
  {
    id: 3,
    url: '',
    title: 'Vibe',
    artist: 'Matt Flow',
    artwork: 'https://e-cdn-images.dzcdn.net/images/cover/250246017db3172eaf697bd5e921a443/264x264-000000-80-0-0.jpg',
  },
  {
    id: 4,
    url: '',
    title: 'Maior que o teto',
    artist: 'Matt Flow',
    artwork: 'https://e-cdn-images.dzcdn.net/images/artist/cc5c08cb2bf6d887fc43e85e84a67b35/264x264-000000-80-0-0.jpg',
  },
];

const App: React.FC = () => {
  return (
    <Container>
      <ScrollView style={{ paddingHorizontal: 18 }}>
        <StatusBar barStyle='light-content' />
        <Header />
        <List data={data} title="Featured" />
        <List data={data} title="New" />
      </ScrollView>
      <Player />
    </Container>
  );
};

export default App;
