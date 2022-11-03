import {ListRenderItem} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SwiperItem from '../atoms/SwiperItem';
import {Pokemon} from 'pokenode-ts';
import {useDispatch} from 'react-redux';
import {updatePokemons} from '../../redux/actions/PokemonActions';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

interface NASwiperProps {
  pokemons: Pokemon[];
  handleNavigate: (item: Pokemon) => void;
}

const NASwiper: React.FC<NASwiperProps> = ({pokemons, handleNavigate}) => {
  const dispatch = useDispatch<any>();
  const listRef = useRef(null);

  const onChangeIndex = item => {
    let current = listRef!.current.getCurrentIndex();
    let prev = listRef!.current.getPrevIndex();

    console.log('pokemon length', pokemons.length);

    console.log(item);
    console.log('current page is : ', current);

    if (current === pokemons.length - 1) {
      dispatch(updatePokemons());
    }
  };

  const handleRenderSwiperItem: ListRenderItem<Pokemon> = ({
    item,
  }: {
    item: Pokemon;
  }) => {
    return (
      <SwiperItem
        pokemon={item}
        key={item.id}
        handleNavigate={handleNavigate}
      />
    );
  };

  return (
    <SwiperFlatList
      index={pokemons.length - 1}
      data={pokemons}
      renderItem={handleRenderSwiperItem}
      ref={listRef}
      onChangeIndex={onChangeIndex}
    />
  );
};

export default NASwiper;
