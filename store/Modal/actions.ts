import { createActionThunk } from "redux-thunk-actions";
import { ModalState } from "./reducers";

export const actionTypes = {
    OPEN_MOVIE_DETAIL_MODAL: 'OPEN_MOVIE_DETAIL_MODAL',
}

export const openMovieDetailModal = createActionThunk(actionTypes.OPEN_MOVIE_DETAIL_MODAL, (id: number): ModalState => {
    return {
        isMovieDetailsModalOpen: true,
        movieId: id,
    }
});

export const closeMovieDetailModal = createActionThunk(actionTypes.OPEN_MOVIE_DETAIL_MODAL, (): ModalState => {
    return {
        isMovieDetailsModalOpen: false,
        movieId: 0
    }
});