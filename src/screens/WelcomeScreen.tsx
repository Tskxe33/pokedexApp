import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {WelcomeScreenProps} from '../navigators/InitialNavigator';
import {Fonts} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {signIn} from '../redux/actions/UsersAction';
import NALoginButton from '../components/atoms/NALoginButton';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<any>();

  const handleSignIn = async () => {
    try {
      dispatch(signIn());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LinearGradient
      style={styles.welcomeContainer}
      colors={[Colors.LG_DARK, Colors.LG_LIGHT]}>
      <Text style={styles.mainHeading}>Pokedex</Text>
      <Text style={styles.subHeading}>All pokemon in one place</Text>
      <NALoginButton
        handleSignIn={handleSignIn}
        title={`Sign in with Google`}
      />
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LG_DARK,
  },

  mainHeading: {
    fontFamily: Fonts.ROBOTO_BOLD,
    fontSize: 48,
    color: Colors.COLOR_GREY_LIGHT,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  subHeading: {
    fontFamily: Fonts.ROBOTO_LIGHT,
    fontSize: 18,
    color: Colors.COLOR_GREY_LIGHT,
  },

  googleButton: {
    marginTop: 100,
    width: 192,
    height: 48,
  },
});
