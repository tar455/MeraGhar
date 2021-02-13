// import data from "./pages/data";
import {ProductListReducer} from "./reducer/productReducer";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
const initialState={};

const reducer =combineReducers({
    productList: ProductListReducer,
});
const ComposeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    reducer,
    initialState,
    ComposeEnhancer(applyMiddleware(thunk)));

export default store;