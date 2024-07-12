import { Reducer, configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'
// import { PERSIST_STORE_NAME } from './constants'
// import storage from 'redux-persist/lib/storage'
// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';


// const persistConfig = {
//     key: PERSIST_STORE_NAME,
//     keyPrefix: '',
//     storage,
//     whitelist: ['auth',],
export const store = configureStore({
    reducer: rootReducer() as Reducer,
    devTools: process.env.NODE_ENV === 'development',
});


export default store
