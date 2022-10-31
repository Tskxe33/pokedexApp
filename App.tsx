import React, {useEffect} from 'react';

import InitialNavigator from './src/navigators/InitialNavigator';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './src/redux/reducers';
import MainNavigator from './src/navigators/MainNavigator';
import {isSignedIn} from './src/redux/actions/UsersAction';

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.users.isLoggedIn);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    GoogleSignin.configure();

    dispatch(isSignedIn());
  }, []);

  return <>{isLoggedIn ? <MainNavigator /> : <InitialNavigator />}</>;
};

export default App;
