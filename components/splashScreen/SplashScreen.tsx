import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { allImages } from '@/constants/images';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const SplashScreen = () => {
  const { push } = useRouter();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, {
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // Infinite repetition
      true, // Reverse the animation (creates pulse effect)
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ScrollView
      contentContainerStyle={{ height: '100%' }}
      className='w-full relative'
    >
      <AnimatedImageBackground
        source={allImages.splashBg}
        resizeMode='cover'
        style={[StyleSheet.absoluteFillObject, animatedStyle]}
        className='bg-primary'
      />
      <View className='flex flex-col justify-center items-center min-h-screen   text-center gap-20'>
        <View className='flex flex-col items-center'>
          <Image source={allImages.logo} className='animate-bounce' />
          <Text className='text-white font-semibold text-5xl'>
            Meals On Demand
          </Text>
        </View>

        <Button
          title="Let's Start"
          containerStyles='bg-white w-full max-w-xs'
          textStyle='font-semibold text-lg'
          handlePress={() => push('/')}
        />
      </View>
    </ScrollView>
  );
};

export default SplashScreen;
