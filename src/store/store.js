import { configureStore, combineReducers } from '@reduxjs/toolkit';
import foodDataSliceReducer from '../feature/dashboard/foodDataSlice';
import wishlistSliceReducer from '../feature/wishlist/wishlistSlice';
import cartSliceData from '../feature/cart/cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from '../saga/saga';

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const allReducer = combineReducers({
    'food_data': foodDataSliceReducer,
    'cart_data': cartSliceData,
    'wishlist': wishlistSliceReducer,
})

const persistedReducer = persistReducer(persistConfig, allReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(mySaga)

export let persistor = persistStore(store)
