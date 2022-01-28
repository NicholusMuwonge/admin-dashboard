import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const enhancers = process.env.NODE_ENV === 'production'
? applyMiddleware(thunk)
: composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, compose(enhancers));
export default store;

