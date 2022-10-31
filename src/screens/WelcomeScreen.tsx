import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WelcomeScreenProps} from '../navigators/InitialNavigator';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
