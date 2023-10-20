import {compose, legacy_createStore as createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddlewares from 'redux-saga';

import { rootReducer } from "./root-reducer";


const sagaMiddlewares = createSagaMiddlewares();

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
);

const composeEnhancer = 
  (process.env.NODE_ENV != 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'user'
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers);

export const persistor = persistStore(store);








// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//       return next(action);
//     }
  
//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());
  
//     next(action);
  
//     console.log('next state: ', store.getState());
// };

// const middleWares = [loggerMiddleware];




// export const store =  configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });