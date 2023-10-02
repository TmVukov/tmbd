import { Movie, Genre } from '../types/interfaces';
import { getMovieGenres } from '../utils';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './Card';

interface GridProps {
  movieData: Movie[];
  allGenres: Genre[];
}

const Grid = ({ movieData, allGenres }: GridProps) => {
  return (
    <Container className='mb-3'>
      <Row>
        {movieData.map((movie, i) => {
          const movieGenres = getMovieGenres(allGenres, movie);

          return (
            <Col className="card-column" key={i}>
              <CardComponent movie={movie} movieGenres={movieGenres} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Grid;
