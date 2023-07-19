import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import TrackPlayer, {
  State,
  Track,
  useProgress,
} from 'react-native-track-player';

import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { secondsToHHMMSS } from '../../services/AppPlayerService';
import { styles } from './styles';

type PlayerProps = {
  track: Track | null;
  playNextPrev: (prevOrNext: 'prev' | 'next') => {};
};

const Player: React.FC<PlayerProps> = ({ track, playNextPrev }) => {
  const [isPlaying, setPlaying] = useState(false);
  const progress = useProgress();
  const [duration, setDuration] = useState(0);

  const getDuration = async () => {
    setDuration(await TrackPlayer.getDuration());
  };

  useEffect(() => {
    getDuration();
  }, []);

  useEffect(() => {
    if (track) {
      setPlaying(true);
      TrackPlayer.add(track);
      TrackPlayer.play();
    }
  }, [track]);

  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
      TrackPlayer.pause();
      setPlaying(false);
    }

    if (state === State.Paused) {
      TrackPlayer.play();
      setPlaying(true);
    }
  };

  return (
    <View style={styles.playerContainer}>
      <Text style={styles.trackTitle}>{track?.title}</Text>
      <Text style={styles.trackArtist}>{track?.artist}</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.timeText}>
          {secondsToHHMMSS(Math.floor(progress.position || 0))}
        </Text>
        <Slider
          style={{
            width: '73%',
            transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
          }}
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#52527a"
          maximumTrackTintColor="#52527a"
          thumbTintColor="#52527a"
          value={progress.position}
          onValueChange={value => TrackPlayer.seekTo(value)}
        />
        <Text style={styles.timeText}>{secondsToHHMMSS(duration || 0)}</Text>
      </View>
      <View style={styles.controlContainer}>
        <Icon
          name="ios-play-skip-back"
          size={26}
          color="#FFFFFF"
          onPress={() => playNextPrev('prev')}
        />
        <Icon
          name={isPlaying ? 'pause' : 'play'}
          size={38}
          color="#FFFFFF"
          onPress={onPlayPausePress}
        />
        <Icon
          name="ios-play-skip-forward"
          size={26}
          color="#FFFFFF"
          onPress={() => playNextPrev('next')}
        />
      </View>
    </View>
  );
};

export default Player;
