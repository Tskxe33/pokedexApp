import {ActivityIndicator, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import SwiperItem from '../atoms/SwiperItem';
import {Pokemon} from 'pokenode-ts';

interface NASwiperProps {
  pokemons: Pokemon[];
  handleNavigate: (item: Pokemon) => void;
}

const NASwiper: React.FC<NASwiperProps> = ({pokemons, handleNavigate}) => {
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

  return <Swiper showsPagination={false}>{handleRenderSwiperItem()}</Swiper>;
};

export default NASwiper;

const styles = StyleSheet.create({});
