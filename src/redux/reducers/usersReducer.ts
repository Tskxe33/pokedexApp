import {UsersAction} from '../actions/actions.types';

interface InitialStateProps {
  email: string;
}

const initialState: InitialStateProps = {
  email: '',
};

const usersReducer = (
  state = initialState,
  action: UsersAction,
): InitialStateProps => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
