import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query';
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const { data: movies = [] } = useQuery('upcomingMovies', getUpcomingMovies, {
    staleTime: 30000
  });

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return
      }}
    />
  );
};

export default UpcomingMoviesPage;