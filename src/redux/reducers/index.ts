import {AnyAction, combineReducers} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import pokemonReducer from './PokemonReducer';
import usersReducer from './usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  pokemons: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type ReduxDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
