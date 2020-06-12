import { useSelector } from "react-redux";
import { State } from "../../types/State";
import { IMovie } from "../../types/Movies";

export const useMovieList = () => {
    return useSelector<State, number[]>(({ movies: { movieIdList } }) => movieIdList);
}

export const useMovie = (id: number) => {
    return useSelector<State, IMovie>(({ movies }) => movies[id]);
}