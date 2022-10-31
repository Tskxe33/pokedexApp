import {AnyAction, combineReducers} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import usersReducer from './usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type ReduxDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
