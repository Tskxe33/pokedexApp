import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import SwiperScreen from '../screens/SwiperScreen';

export type SwiperNavigatorParamList = {
  [AppRoute.SWIPER_SCREEN]: undefined;
};

export interface SwiperNavigatorProps<
  Screen extends keyof SwiperNavigatorParamList,
> {
  navigation: NativeStackNavigationProp<SwiperNavigatorParamList, Screen>;
  route: RouteProp<SwiperNavigatorParamList, Screen>;
}

export type SplashScreenProps = SwiperNavigatorProps<AppRoute.SWIPER_SCREEN>;

const Stack = createNativeStackNavigator<SwiperNavigatorParamList>();

const SwiperNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.SWIPER_SCREEN}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={AppRoute.SWIPER_SCREEN} component={SwiperScreen} />
    </Stack.Navigator>
  );
};

export default SwiperNavigator;
