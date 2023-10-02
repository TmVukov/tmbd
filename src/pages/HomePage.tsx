import { useAppContext } from '../hooks/useAppContext';
import { useResetData } from '../hooks/useResetData';
import Spinner from 'react-bootstrap/Spinner';
import CarouselComponent from '../components/Carousel';
import Grid from '../components/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const { topRated, upcoming, genres, loading } = useAppContext();
  useResetData();

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
