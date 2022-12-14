import {userInitialState} from '../../constants/InitialStates';
import {User} from '../../models/Users';
import {UsersAction} from '../actions/actions.types';
import {
  IS_LOGGED_IN,
  SET_LOGOUT,
  SET_MODAL_VISIBLE,
  SET_USER,
} from '../actions/actionTypes/usersActionTypes';

interface InitialStateProps {
  user: User;
  isLoggedIn: boolean;
  setModalVisible: boolean;
}

const initialState: InitialStateProps = {
  user: userInitialState,
  isLoggedIn: false,
  setModalVisible: false,
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
        isLoggedIn: false,
        setModalVisible: false,
      };
    case IS_LOGGED_IN:
      return {
        ...state,
      };

    case SET_MODAL_VISIBLE:
      return {
        ...state,
        setModalVisible: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
