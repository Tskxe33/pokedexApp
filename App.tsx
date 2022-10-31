import React, {useEffect} from 'react';

import InitialNavigator from './src/navigators/InitialNavigator';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return <InitialNavigator />;
};

export default App;
