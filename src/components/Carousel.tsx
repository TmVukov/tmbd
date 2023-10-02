import { Carousel, Image } from 'react-bootstrap';
import { Movie, Genre } from '../types/interfaces';
import { getMovieGenres, displayMovieGenres } from '../utils';
import { useScreenSize } from '../hooks/useScreenSize';
import { StarIcon } from '@heroicons/react/20/solid';

interface CarouselComponentProps {
  topRated: Movie[];
  allGenres: Genre[];
}

const CarouselComponent = ({ topRated, allGenres }: CarouselComponentProps) => {
  const { width } = useScreenSize();

  return (
    <Carousel className="mt-5 mb-5">
      {topRated.map((movie, i) => {
        const movieGenres = getMovieGenres(allGenres, movie);
        const imageUrl =
          width < 640
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

        return (
          <Carousel.Item key={i}>
            <Image
              src={imageUrl}
              alt={movie.original_title}
              className="movie-img"
            />

            <Carousel.Caption>
              <h1 className="movie-title">
                <strong>{movie.original_title}</strong>
              </h1>
              <p className="release-date mt-1">
                <i>
                  <b>Release Date: {movie.release_date}</b>
                </i>
              </p>
              <>{displayMovieGenres(movieGenres)}</>
              <small className="star-icon-container">
                <StarIcon className="star-icon" /> <b>{movie.vote_average}</b>
              </small>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
