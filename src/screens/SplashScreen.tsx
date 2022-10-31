import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {SplashScreenProps} from '../navigators/InitialNavigator';
import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants/Colors';
import {AppRoute} from '../constants/AppRoute';

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(AppRoute.WELCOME_SCREEN);
    }, 2000);
  }, []);

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[Colors.LG_DARK, Colors.LG_LIGHT]}>
      <View style={styles.lottieContainer}>
        <Lottie
          source={require('../assets/lotties/splashLottie.json')}
          autoPlay
          loop
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lottieContainer: {
    width: '30%',
    height: '30%',
  },
});
