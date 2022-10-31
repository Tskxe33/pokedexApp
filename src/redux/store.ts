import {legacy_createStore as createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);
export default store;
export const persistor = persistStore(store);
