import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const VideoScreen = ({ navigation }) => {
  const refVideo = useRef(null);
  const { height, width } = Dimensions.get('window');
  const videoUrl = require('../assets/videos/video.mp4');

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
          source: videoUrl,
          ref: refVideo,
        }}
        style={{ 
          width: width, 
          height: height}}
        slider={{
          visible: true,
        }}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    zIndex: 1,
  },
});

export default VideoScreen;