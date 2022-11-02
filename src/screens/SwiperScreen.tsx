import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SwiperScreenProps} from '../navigators/SwiperNavigator';
import NASwiper from '../components/organism/NASwiper';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAllTypes,
  setPokemons,
  setPokemonsByType,
} from '../redux/actions/PokemonActions';
import {RootState} from '../redux/reducers';
import {Pokemon} from 'pokenode-ts';
import {AppRoute} from '../constants/AppRoute';
import NAPokemonPicker from '../components/molecules/NAPokemonPicker';
import {Colors} from '../constants/Colors';

const SwiperScreen: React.FC<SwiperScreenProps> = ({navigation}) => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const selectedType = useSelector(
    (state: RootState) => state.pokemons.selectedType,
  );
  const dispatch = useDispatch<any>();
  const randomNumber = Math.floor(Math.random() * 400) + 1;

  useEffect(() => {
    dispatch(setAllTypes());

    selectedType != ''
      ? dispatch(setPokemonsByType())
      : dispatch(setPokemons(randomNumber));
  }, []);

  const handleNavigate = (item: Pokemon) => {
    navigation.navigate(AppRoute.POKEMON_DETAILS_SCREEN, {
      pokemonDetails: item,
    });
  };

  return (
    <View style={styles.swiperContainer}>
      <NAPokemonPicker />
      <NASwiper pokemons={pokemons} handleNavigate={handleNavigate} />
    </View>
  );
};

export default SwiperScreen;

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_WHITE,
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
