// Redux Toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// Redux Persist
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Api
import { currencyApi } from './API/currencyApi';
import { flagsApi } from './API/flagsApi';

// Slices
import selectsSlice from './Slices/selectsSlice';

const rootReducer = combineReducers({
    selects: selectsSlice,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [flagsApi.reducerPath]: flagsApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['selects'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(currencyApi.middleware, flagsApi.middleware),
});

export const persistor = persistStore(store);

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
