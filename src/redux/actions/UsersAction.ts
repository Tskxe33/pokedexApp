import {Dispatch} from 'redux';
import {userInitialState} from '../../constants/InitialStates';
import LoginService from '../../service/LoginService';

import {
  IS_LOGGED_IN,
  SET_LOGOUT,
  SET_USER,
} from './actionTypes/usersActionTypes';

export const signIn = () => async (dispatch: Dispatch) => {
  try {
    const response = await LoginService.signIn();
    dispatch({
      type: SET_USER,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => async (dispatch: Dispatch) => {
  try {
    await LoginService.signOut();
    dispatch({
      type: SET_LOGOUT,
      payload: userInitialState,
    });
  } catch (error) {
    console.log(error);
  }
};

export const isSignedIn = () => async (dispatch: Dispatch) => {
  try {
    const response = await LoginService.isSignedIn();

    dispatch({
      type: IS_LOGGED_IN,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};
