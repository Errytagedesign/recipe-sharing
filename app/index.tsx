import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import SplashScreen from '@/components/splashScreen/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaProvider>
      <SplashScreen />
    </SafeAreaProvider>
  );
};

export default index;
