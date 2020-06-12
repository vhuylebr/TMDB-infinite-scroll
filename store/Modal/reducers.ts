import { handleActions } from 'redux-actions';
import { actionTypes } from './actions';


export interface ModalState {
    isMovieDetailsModalOpen: boolean;
    movieId: number;
}

const usersInitialState: ModalState = {
    isMovieDetailsModalOpen: false,
    movieId: 0,
}

export default handleActions<ModalState>(
    {
        [`${actionTypes.OPEN_MOVIE_DETAIL_MODAL}_SUCCEEDED`]: (_state, { payload }) => payload
    },
    usersInitialState,
);