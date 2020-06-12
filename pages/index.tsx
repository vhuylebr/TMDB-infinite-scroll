import React from "react"
import { getMovies } from "../store/Movies/actions"
import { useDispatch } from 'react-redux';
import { useMovieList } from "../store/Movies/selectors";
import MovieCard from "../components/MovieCard";
import InfiniteScroll from 'react-infinite-scroller';
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  const movieList = useMovieList();
  const loadMore = (page: number) => {
    dispatch(getMovies(page))
  }
  return (
    <InfiniteScroll
      hasMore={true}
      loadMore={loadMore}
      pageStart={1}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "left" }}
    >
      {movieList.map((id) => (<MovieCard key={id} movieId={id} />))}
    </InfiniteScroll>
  )
}

export default IndexPage
