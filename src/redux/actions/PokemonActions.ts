import {Dispatch} from 'redux';
import {PokeItem} from '../../models/Pokemon';
import PokemonService from '../../service/PokemonService';
import {RootState} from '../reducers';
import {
  SET_POKEMONS,
  SET_POKEMON_INFO,
  UPDATE_POKEMONS,
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

export const updatePokemons =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const next = getState().pokemons.next;

      const response = await PokemonService.updatePokemons(next);

      dispatch({
        type: SET_POKEMON_INFO,
        payload: response,
      });

      const result = await Promise.all(
        response.results.map(
          async (el: PokeItem) =>
            await PokemonService.getPokemonDetails(el.name),
        ),
      );

      dispatch({
        type: UPDATE_POKEMONS,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
