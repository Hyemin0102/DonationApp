import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import User from './reducers/User';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import Categories from './reducers/Categories';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  //미들웨어 - 액션 디스패치되면 콘솔에 이전,액션,다음상태 로그 확인 가능
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export default store;
export const persistor = persistStore(store);
