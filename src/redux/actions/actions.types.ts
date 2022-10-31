import {User} from '../../models/Users';
import {
  SET_USER,
  SET_LOGOUT,
  IS_LOGGED_IN,
} from './actionTypes/usersActionTypes';

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
