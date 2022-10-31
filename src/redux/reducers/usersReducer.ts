import {userInitialState} from '../../constants/InitialStates';
import {User} from '../../models/Users';
import {UsersAction} from '../actions/actions.types';
import {
  IS_LOGGED_IN,
  SET_LOGOUT,
  SET_USER,
} from '../actions/actionTypes/usersActionTypes';

interface InitialStateProps {
  user: User;
  isLoggedIn: boolean;
}

const initialState: InitialStateProps = {
  user: userInitialState,
  isLoggedIn: false,
};

const usersReducer = (
  state = initialState,
  action: UsersAction,
): InitialStateProps => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case SET_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
