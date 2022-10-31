import React, {useEffect} from 'react';

import InitialNavigator from './src/navigators/InitialNavigator';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';
import {RootState} from './src/redux/reducers';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.users.isLoggedIn);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return <>{isLoggedIn ? <MainNavigator /> : <InitialNavigator />}</>;
};

export default App;
