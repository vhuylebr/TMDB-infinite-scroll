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
let store: any;

export const initializeStore = () => {
    let _store = store ?? initStore()

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (store) {
        _store = initStore()
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore() {
    const store = useMemo(() => initializeStore(), [])
    return store
}