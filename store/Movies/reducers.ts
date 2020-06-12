import { handleActions } from 'redux-actions';
import { actionTypes } from './actions';
import keyBy from 'lodash/keyBy';
import uniq from 'lodash/uniq';
import { IMovie } from '../../types/Movies';

export interface MoviesState {
    [id: number]: IMovie;
    movieIdList: number[];
}

const usersInitialState: MoviesState = {
    movieIdList: [],
}

export default handleActions<MoviesState, IMovie | IMovie[]>(
    {
        [`${actionTypes.GET_MOVIES}_SUCCEEDED`]: ({ movieIdList, ...movies }, { payload }) => {
            const newMovies = keyBy<IMovie>(payload as IMovie[], ({ id }) => id);
            const newMovieIdList = (payload as IMovie[]).map(({ id }) => id);
            return { ...movies, ...newMovies, movieIdList: uniq([...movieIdList, ...newMovieIdList]) }
        },
        [`${actionTypes.GET_MOVIE_DETAILS}_SUCCEEDED`]: (state, { payload }) => {
            state[(payload as IMovie).id] = (payload as IMovie);
            return ({ ...state })
        }
    },
    usersInitialState,
);