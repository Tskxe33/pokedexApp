import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import TypesScreen from '../screens/TypesScreen';

export type TypesNavigatorParamList = {
  [AppRoute.TYPES_SCREEN]: undefined;
};

export interface TypesNavigatorProps<
  Screen extends keyof TypesNavigatorParamList,
> {
  navigation: NativeStackNavigationProp<TypesNavigatorParamList, Screen>;
  route: RouteProp<TypesNavigatorParamList, Screen>;
}

export type SplashScreenProps = TypesNavigatorProps<AppRoute.TYPES_SCREEN>;

const Stack = createNativeStackNavigator<TypesNavigatorParamList>();

const TypesNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.TYPES_SCREEN}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={AppRoute.TYPES_SCREEN} component={TypesScreen} />
    </Stack.Navigator>
  );
};

export default TypesNavigator;
