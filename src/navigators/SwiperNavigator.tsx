import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from '../constants/AppRoute';
import SwiperScreen from '../screens/SwiperScreen';
import NAHeaderButton from '../components/atoms/NAHeaderButton';
import {useDispatch} from 'react-redux';
import {signOut} from '../redux/actions/UsersAction';
import {Pokemon} from 'pokenode-ts';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import {Colors} from '../constants/Colors';

export type SwiperNavigatorParamList = {
  [AppRoute.SWIPER_SCREEN]: undefined;
  [AppRoute.POKEMON_DETAILS_SCREEN]: {
    pokemonDetails: Pokemon;
  };
};

export interface SwiperNavigatorProps<
  Screen extends keyof SwiperNavigatorParamList,
> {
  navigation: NativeStackNavigationProp<SwiperNavigatorParamList, Screen>;
  route: RouteProp<SwiperNavigatorParamList, Screen>;
}

export type SwiperScreenProps = SwiperNavigatorProps<AppRoute.SWIPER_SCREEN>;
export type PokemonDetailsScreenProps =
  SwiperNavigatorProps<AppRoute.POKEMON_DETAILS_SCREEN>;

const Stack = createNativeStackNavigator<SwiperNavigatorParamList>();

const SwiperNavigator: React.FC = () => {
  const dispatch = useDispatch<any>();
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.SWIPER_SCREEN}
      screenOptions={{
        animation: 'fade',
        title: '',
        headerStyle: {backgroundColor: Colors.COLOR_PRIMARY},

        headerRight: () => (
          <NAHeaderButton onPress={() => dispatch(signOut())} />
        ),
      }}>
      <Stack.Screen name={AppRoute.SWIPER_SCREEN} component={SwiperScreen} />
      <Stack.Screen
        name={AppRoute.POKEMON_DETAILS_SCREEN}
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default SwiperNavigator;
