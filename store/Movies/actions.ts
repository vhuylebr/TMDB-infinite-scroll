import { createActionThunk } from 'redux-thunk-actions';
import APIManager from '../../services/Api';

export const actionTypes = {
    GET_MOVIES: 'GET_MOVIES',
    GET_MOVIE_DETAILS: 'GET_MOVIE_DETAILS',
}

export const getMovies = createActionThunk(actionTypes.GET_MOVIES, async (page: number = 1) => {
    const { data: { results } } = await APIManager.getMovies(page);
    return results;
});

export const getMovieDetails = createActionThunk(actionTypes.GET_MOVIE_DETAILS, async (id: number) => {
    const { data } = await APIManager.getMovieDetails(id);
    return data;
});
