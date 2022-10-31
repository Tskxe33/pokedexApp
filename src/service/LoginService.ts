import {GoogleSignin} from '@react-native-google-signin/google-signin';

class LoginService {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  isSignedIn = async () => {
    try {
      const response = await GoogleSignin.isSignedIn();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };
}

export default new LoginService();
