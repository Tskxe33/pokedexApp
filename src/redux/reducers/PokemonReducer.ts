import {PokemonAction} from '../actions/actions.types';
import {
  SET_POKEMONS,
  SET_POKEMON_INFO,
  UPDATE_POKEMONS,
} from '../actions/actionTypes/pokemonsActionTypes';
import {Pokemon} from 'pokenode-ts';

interface InitialStateProps {
  pokemons: Pokemon[];
  next: string;
  previous: string;
}

const initialState: InitialStateProps = {
  pokemons: [],
  next: '',
  previous: '',
};

const pokemonReducer = (
  state = initialState,
  action: PokemonAction,
): InitialStateProps => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case UPDATE_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
      };

    case SET_POKEMON_INFO:
      return {
        ...state,
        next: action.payload.next,
        previous: action.payload.previous,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
