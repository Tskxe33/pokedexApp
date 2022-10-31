import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import GridScreen from '../screens/GridScreen';

export type GridNavigatorParamList = {
  [AppRoute.GRID_SCREEN]: undefined;
};

export interface GridNavigatorProps<
  Screen extends keyof GridNavigatorParamList,
> {
  navigation: NativeStackNavigationProp<GridNavigatorParamList, Screen>;
  route: RouteProp<GridNavigatorParamList, Screen>;
}

export type GridScreenProps = GridNavigatorProps<AppRoute.GRID_SCREEN>;

const Stack = createNativeStackNavigator<GridNavigatorParamList>();

const GridNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.GRID_SCREEN}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={AppRoute.GRID_SCREEN} component={GridScreen} />
    </Stack.Navigator>
  );
};

export default GridNavigator;