import { useEffect } from 'react';
import {
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
  GENRES_URL,
  SET_TOP_RATED,
  SET_UPCOMING,
  SET_GENRES,
  SET_LOADING
} from '../constants';
import { fetchUrls } from '../utils';
import { useAppContext } from './useAppContext';

export const useInitialData = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: true });
    const urls = [TOP_RATED_MOVIES_URL, UPCOMING_MOVIES_URL, GENRES_URL];

    const fetchHomePageData = async () => {
      try {
        const data = await fetchUrls(urls);

        if (data) {
          const [topRated, upcoming, genres] = data;

          dispatch({type: SET_TOP_RATED, payload: topRated});
          dispatch({type: SET_UPCOMING, payload: upcoming});
          dispatch({type: SET_GENRES, payload: genres});
          dispatch({ type: SET_LOADING, payload: false });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({ type: SET_LOADING, payload: false });
      }
    };

    fetchHomePageData();
  }, [dispatch]);
};
