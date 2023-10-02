import { useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import {
  SET_SEARCH_DATA,
  SET_SEARCH_TERM,
  SET_CREDITS,
  SET_PAGE,
} from '../constants';
import { Search } from '../types/interfaces';
import Spinner from 'react-bootstrap/Spinner';
import CarouselComponent from '../components/Carousel';
import Grid from '../components/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const { topRated, upcoming, genres, loading, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: SET_SEARCH_DATA, payload: {} as Search });
    dispatch({ type: SET_SEARCH_TERM, payload: '' });
    dispatch({ type: SET_CREDITS, payload: [] });
    dispatch({ type: SET_PAGE, payload: 1 });
  }, [dispatch]);

  if (loading)
    return (
      <div className="spinner-container">
        <Spinner variant="primary" className="mx-auto" />
      </div>
    );

  return (
    <>
      <CarouselComponent topRated={topRated} allGenres={genres} />
      <Grid movieData={upcoming} allGenres={genres} />
    </>
  );
};

export default HomePage;
