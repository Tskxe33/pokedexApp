import {Dispatch} from 'redux';
import {PokeItem} from '../../models/Pokemon';
import PokemonService from '../../service/PokemonService';
import {
  SET_POKEMONS,
  SET_POKEMON_INFO,
} from './actionTypes/pokemonsActionTypes';

export const setPokemons = (offset: number) => async (dispatch: Dispatch) => {
  try {
    const response = await PokemonService.getPokemons(offset);

    dispatch({
      type: SET_POKEMON_INFO,
      payload: response,
    });

    const result = await Promise.all(
      response.results.map(
        async (el: PokeItem) => await PokemonService.getPokemonDetails(el.name),
      ),
    );

    dispatch({
      type: SET_POKEMONS,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
