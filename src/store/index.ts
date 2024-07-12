import { Reducer, configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'


export const store = configureStore({
    reducer: rootReducer() as Reducer,
    devTools: process.env.NODE_ENV === 'development',
});


export default store
