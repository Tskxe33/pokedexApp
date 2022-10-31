import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SplashScreenProps} from '../navigators/InitialNavigator';
import Lottie from 'lottie-react-native';
import {Fonts} from '../constants/Fonts';
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
      <Text style={styles.splashTitle}>Pokedex</Text>
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

  splashTitle: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 48,
    color: Colors.COLOR_GREY_LIGHT,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  lottieContainer: {
    width: '30%',
    height: '30%',
  },
});
