import { useSelector } from "react-redux";
import { State } from "../../types/State";
import { IMovies } from "../../types/Movies";

export const useMovieList = () => {
    return useSelector<State, number[]>(({ movies: { movieIdList } }) => movieIdList);
}

export const useMovie = (id: number) => {
    return useSelector<State, IMovies>(({ movies }) => movies[id]);
}