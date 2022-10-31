import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export type initialNavigatorParamList = {
  [AppRoute.SPLASH_SCREEN]: undefined;
  [AppRoute.WELCOME_SCREEN]: undefined;
};

export interface initialNavigatorProps<
  Screen extends keyof initialNavigatorParamList,
> {
  navigation: NativeStackNavigationProp<initialNavigatorParamList, Screen>;
  route: RouteProp<initialNavigatorParamList, Screen>;
}

export type SplashScreenProps = initialNavigatorProps<AppRoute.SPLASH_SCREEN>;
export type WelcomeScreenProps = initialNavigatorProps<AppRoute.WELCOME_SCREEN>;

const Stack = createNativeStackNavigator<initialNavigatorParamList>();

const InitialNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.SPLASH_SCREEN}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        gestureEnabled: false,
      }}>
      <Stack.Screen name={AppRoute.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={AppRoute.WELCOME_SCREEN} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default InitialNavigator;
