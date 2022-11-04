import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import GridScreen from '../screens/GridScreen';
import {useDispatch} from 'react-redux';
import NAHeaderButton from '../components/atoms/NAHeaderButton';
import {Colors} from '../constants/Colors';
import {SET_MODAL_VISIBLE} from '../redux/actions/actionTypes/usersActionTypes';

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
  const dispatch = useDispatch<any>();

  const handleOpenModal = () => {
    dispatch({
      type: SET_MODAL_VISIBLE,
      payload: true,
    });
  };

  return (
    <Stack.Navigator
      initialRouteName={AppRoute.GRID_SCREEN}
      screenOptions={{
        animation: 'fade',
        title: '',
        headerStyle: {backgroundColor: Colors.COLOR_PRIMARY},
        headerRight: () => <NAHeaderButton onPress={handleOpenModal} />,
      }}>
      <Stack.Screen name={AppRoute.GRID_SCREEN} component={GridScreen} />
    </Stack.Navigator>
  );
};

export default GridNavigator;
