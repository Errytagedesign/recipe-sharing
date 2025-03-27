import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <SafeAreaView>
      <ImageBackground>
        <View className='grid place-content-center'>
          <Text className='text-4xl text-red-600'>Profile</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
