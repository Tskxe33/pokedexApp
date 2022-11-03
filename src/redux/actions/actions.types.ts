import {User} from '../../models/Users';
import {
  SEARCH_POKEMON,
  SET_ALL_TYPES,
  SET_PICKER_ITEMS,
  SET_POKEMONS,
  SET_POKEMON_INFO,
  SET_SELECTED_TYPE,
  UPDATE_POKEMONS,
} from './actionTypes/pokemonsActionTypes';
import {
  SET_USER,
  SET_LOGOUT,
  IS_LOGGED_IN,
} from './actionTypes/usersActionTypes';

import {Pokemon} from 'pokenode-ts';
import {PickerItem, TypeItem} from '../../models/Pokemon';

export type UsersAction =
  | {
      type: SET_USER;
      payload: User;
    }
  | {
      type: IS_LOGGED_IN;
      payload: boolean;
    }
  | {
      type: SET_LOGOUT;
      payload: User;
    };

export type PokemonAction =
  | {
      type: SET_POKEMONS;
      payload: Pokemon[];
    }
  | {
      type: UPDATE_POKEMONS;
      payload: Pokemon[];
    }
  | {
      type: SET_POKEMON_INFO;
      payload: any;
    }
  | {
      type: SET_ALL_TYPES;
      payload: TypeItem[];
    }
  | {
      type: SET_SELECTED_TYPE;
      payload: string;
    }
  | {
      type: SEARCH_POKEMON;
      payload: string;
    }
  | {
      type: SET_PICKER_ITEMS;
      payload: PickerItem[];
    };
