import { MoviesState } from "../store/Movies/reducers";
import { ModalState } from "../store/Modal/reducers";

export interface State {
    movies: MoviesState;
    modal: ModalState;
}