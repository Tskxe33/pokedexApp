import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import SwiperItem from '../atoms/SwiperItem';
import {Pokemon} from 'pokenode-ts';
import {useDispatch} from 'react-redux';
import {updatePokemons} from '../../redux/actions/PokemonActions';

interface NASwiperProps {
  pokemons: Pokemon[];
  handleNavigate: (item: Pokemon) => void;
}

const NASwiper: React.FC<NASwiperProps> = ({pokemons, handleNavigate}) => {
  const dispatch = useDispatch<any>();

  const handleLoadMore = (index: number) => {
    if (index === pokemons.length - 1) {
      dispatch(updatePokemons());
    }
  };

  const handleRenderSwiperItem = () => {
    return pokemons.map((pokemon: Pokemon) => {
      return (
        <SwiperItem
          pokemon={pokemon}
          key={pokemon.id}
          handleNavigate={handleNavigate}
        />
      );
    });
  };

  return (
    <Swiper
      showsPagination={false}
      loop={false}
      onIndexChanged={index => handleLoadMore(index)}>
      {handleRenderSwiperItem()}
    </Swiper>
  );
};

export default NASwiper;

const styles = StyleSheet.create({});
