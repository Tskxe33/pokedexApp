import {Dispatch} from 'redux';
import {PokeItem} from '../../models/Pokemon';
import PokemonService from '../../service/PokemonService';
import {RootState} from '../reducers';
import {
  GO_TO_POKEMON,
  SEARCH_POKEMON,
  SET_ALL_TYPES,
  SET_PICKER_ITEMS,
  SET_POKEMONS,
  SET_POKEMON_INFO,
  UPDATE_POKEMONS,
} from './actionTypes/pokemonsActionTypes';

export const setPokemons =
  (offset: number) => async (dispatch: Dispatch | any) => {
    try {
      const response = await PokemonService.getPokemons(offset);

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
        type: SET_POKEMONS,
        payload: result,
      });

      dispatch(setPickerItems());
    } catch (error) {
      console.log(error);
    }
  };

export const updatePokemons =
  () => async (dispatch: Dispatch | any, getState: () => RootState) => {
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

      dispatch(setPickerItems());
    } catch (error) {
      console.log(error);
    }
  };

export const setAllTypes = () => async (dispatch: Dispatch) => {
  try {
    const response = await PokemonService.getAllTypes();

    dispatch({
      type: SET_ALL_TYPES,
      payload: response.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setPokemonsByType =
  () => async (dispatch: Dispatch | any, getState: () => RootState) => {
    const selectedType = getState().pokemons.selectedType;

    if (selectedType === '') {
      dispatch(setPokemons(Math.floor(Math.random() * 400) + 1));
    } else {
      try {
        const response = await PokemonService.getPokomonsByType(selectedType);

        const result = await Promise.all(
          response.pokemon.map(
            async (el: any) =>
              await PokemonService.getPokemonDetails(el.pokemon.name),
          ),
        );

        dispatch({
          type: SET_POKEMONS,
          payload: result,
        });

        dispatch(setPickerItems());
      } catch (error) {
        console.log(error);
      }
    }
  };

export const setPickerItems =
  () => async (dispatch: Dispatch | any, getState: () => RootState) => {
    const pokemons = getState().pokemons.pokemons;

    const items = [];

    for (let index = 1; index < pokemons.length; index++) {
      items.push({
        value: pokemons[index].name,
        label: pokemons[index].name,
      });
    }

    dispatch({
      type: SET_PICKER_ITEMS,
      payload: items,
    });
  };

export const goToSelectedPokemon =
  (selectedItem: string) => async (dispatch: Dispatch | any) => {
    dispatch({
      type: SEARCH_POKEMON,
      payload: selectedItem,
    });
    dispatch({
      type: GO_TO_POKEMON,
      payload: selectedItem,
    });
  };
