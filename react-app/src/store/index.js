import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session"
import recipesReducer from './recipe';
import mealPlanReducer from './mealplan';
import blogPostReducer from './blogpost';
import commentsReducer from './comment';
import searchBarReducer from './search';

const rootReducer = combineReducers({
    session,
    recipes: recipesReducer,
    meals: mealPlanReducer,
    posts: blogPostReducer,
    comments: commentsReducer,
    searchBar: searchBarReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
