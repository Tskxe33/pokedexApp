import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SwiperScreenProps} from '../navigators/SwiperNavigator';

const SwiperScreen: React.FC<SwiperScreenProps> = () => {
  return (
    <View style={styles.swiperContainer}>
      <Text>SwiperScreen</Text>
      <Text>Test</Text>
    </View>
  );
};

export default SwiperScreen;

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
