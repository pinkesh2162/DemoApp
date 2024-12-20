import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import persistConfig from './persistConfig';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import counterReducer from './slices/counterSlice';
import authSlice from './slices/authSlice';
import inventoryReducer from './slices/inventorySlice';
import { useDispatch } from 'react-redux';

const rootReducer: any = combineReducers({
    counterReducer: counterReducer,
    authSlice: authSlice,
    inventory: inventoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const useAppDispatch = () => useDispatch<AppDispatch>();