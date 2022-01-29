import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancers = process.env.NODE_ENV === 'production'
? applyMiddleware(thunk)
: composeWithDevTools(applyMiddleware(thunk));

const store = createStore(persistedReducer, compose(enhancers));
let persistor = persistStore(store)
export {persistor};
export default store;

