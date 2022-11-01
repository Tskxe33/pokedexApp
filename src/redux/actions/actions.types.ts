import {User} from '../../models/Users';
import {
  SET_POKEMONS,
  SET_POKEMON_INFO,
  UPDATE_POKEMONS,
} from './actionTypes/pokemonsActionTypes';
import {
  SET_USER,
  SET_LOGOUT,
  IS_LOGGED_IN,
} from './actionTypes/usersActionTypes';

import {Pokemon} from 'pokenode-ts';

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
    };
