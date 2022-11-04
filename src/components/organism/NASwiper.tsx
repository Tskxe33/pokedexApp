import {ListRenderItem} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SwiperItem from '../atoms/SwiperItem';
import {Pokemon} from 'pokenode-ts';
import {useDispatch, useSelector} from 'react-redux';
import {updatePokemons} from '../../redux/actions/PokemonActions';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {RootState} from '../../redux/reducers';

interface NASwiperProps {
  pokemons: Pokemon[];
  handleNavigate: (item: Pokemon) => void;
}

const NASwiper: React.FC<NASwiperProps> = ({pokemons, handleNavigate}) => {
  const dispatch = useDispatch<any>();
  const listRef: any = useRef(null);

  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemons.selectedPokemon,
  );

  const onChangeIndex = () => {
    let current = listRef!.current.getCurrentIndex();

    if (current === pokemons.length - 1) {
      dispatch(updatePokemons());
    }
  };

  useEffect(() => {
    if (listRef!.current.getCurrentIndex()) {
      listRef!.current.goToFirstIndex();
    }
  }, [selectedPokemon]);

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
    // Swiper not supporting loop feature
    <SwiperFlatList
      data={pokemons}
      renderItem={handleRenderSwiperItem}
      ref={listRef}
      onChangeIndex={onChangeIndex}
    />
  );
};

export default NASwiper;
