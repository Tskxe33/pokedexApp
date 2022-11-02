import {PokemonAction} from '../actions/actions.types';
import {
  SET_ALL_TYPES,
  SET_PICKER_ITEMS,
  SET_POKEMONS,
  SET_POKEMON_INFO,
  SET_SELECTED_TYPE,
  UPDATE_POKEMONS,
} from '../actions/actionTypes/pokemonsActionTypes';
import {Pokemon} from 'pokenode-ts';
import {PickerItem, TypeItem} from '../../models/Pokemon';

interface InitialStateProps {
  pokemons: Pokemon[];
  next: string;
  previous: string;
  allTypes: TypeItem[];
  selectedType: string;
  pickerItems: PickerItem[];
}

const initialState: InitialStateProps = {
  pokemons: [],
  next: '',
  previous: '',
  allTypes: [],
  selectedType: '',
  pickerItems: [],
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

    case SET_ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };

    case SET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload,
      };

    case SET_PICKER_ITEMS:
      return {
        ...state,
        pickerItems: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
