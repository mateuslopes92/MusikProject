/**
 * @format
 */

import App from './src/App';
import { AppRegistry } from 'react-native';
import { PlaybackService } from './src/services/AppPlayerService';
import TrackPlayer from 'react-native-track-player';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => PlaybackService);
