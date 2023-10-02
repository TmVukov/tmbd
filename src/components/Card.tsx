import Card from 'react-bootstrap/Card';
import { Movie, Genre } from '../types/interfaces';
import { displayMovieGenres } from '../utils';
import { Link } from 'react-router-dom';

interface CardComponentProps {
  movie: Movie;
  movieGenres: Genre[];
}

const CardComponent = ({ movie, movieGenres }: CardComponentProps) => {
  return (
    <Card className="bg-secondary text-white my-3 card">
      <Card.Img
        variant="top"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : '/src/assets/image-placeholder.jpg'
        }
      />
      <Card.Body>
        <Card.Title>
          <strong>{movie.original_title}</strong>
        </Card.Title>
        <Card.Text>Release date: {movie.release_date}</Card.Text>
        <div>{displayMovieGenres(movieGenres)}</div>
        <Link to={`/movie-details/${movie.id}`} className="card-link">
          Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
