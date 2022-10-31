import {SET_EMAIL, SET_LOGOUT} from './actionTypes/actions.types';

export type UsersAction =
  | {
      type: SET_EMAIL;
      payload: string;
    }
  | {
      type: SET_LOGOUT;
    };
