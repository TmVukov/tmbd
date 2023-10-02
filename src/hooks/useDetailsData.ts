import { useEffect } from 'react';
import { getMovieDetailsUrls, fetchUrls } from '../utils';
import { useAppContext } from './useAppContext';
import {
  SET_MOVIE_DETAILS,
  SET_CREDITS,
  SET_VIDEOS,
  SET_RECOMMENDED,
  SET_LOADING,
} from '../constants';

export const useDetailsData = (movieId: string) => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const fetchDetailsData = async () => {
      dispatch({ type: SET_LOADING, payload: true });
      const urls = getMovieDetailsUrls(movieId);

      try {
        const data = await fetchUrls(urls);

        if (data) {
          const [movieDetails, credits, videos, recommended] = data;

          dispatch({ type: SET_MOVIE_DETAILS, payload: movieDetails });
          dispatch({ type: SET_CREDITS, payload: credits });
          dispatch({ type: SET_VIDEOS, payload: videos });
          dispatch({ type: SET_RECOMMENDED, payload: recommended });
          dispatch({ type: SET_LOADING, payload: false });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({ type: SET_LOADING, payload: false });
      }
    };

    fetchDetailsData();
  }, [dispatch, movieId]);
};
