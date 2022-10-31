import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import TypesScreen from '../screens/TypesScreen';
import NAHeaderButton from '../components/atoms/NAHeaderButton';
import {useDispatch} from 'react-redux';
import {signOut} from '../redux/actions/UsersAction';

export type TypesNavigatorParamList = {
  [AppRoute.TYPES_SCREEN]: undefined;
};

export interface TypesNavigatorProps<
  Screen extends keyof TypesNavigatorParamList,
> {
  navigation: NativeStackNavigationProp<TypesNavigatorParamList, Screen>;
  route: RouteProp<TypesNavigatorParamList, Screen>;
}

export type TypesScreenProps = TypesNavigatorProps<AppRoute.TYPES_SCREEN>;

const Stack = createNativeStackNavigator<TypesNavigatorParamList>();

const TypesNavigator: React.FC = () => {
  const dispatch = useDispatch<any>();

  return (
    <Stack.Navigator
      initialRouteName={AppRoute.TYPES_SCREEN}
      screenOptions={{
        animation: 'fade',
        title: '',
        headerRight: () => (
          <NAHeaderButton onPress={() => dispatch(signOut())} />
        ),
      }}>
      <Stack.Screen name={AppRoute.TYPES_SCREEN} component={TypesScreen} />
    </Stack.Navigator>
  );
};

export default TypesNavigator;
