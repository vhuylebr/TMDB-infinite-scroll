import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useMemo } from 'react';
import movies from './Movies/reducers';
import modal from './Modal/reducers';

const initStore = () => {
    return createStore(
        combineReducers({
            movies,
            modal
        }),
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}


export function useStore() {
    const store = useMemo(() => initStore(), [])
    return store
}