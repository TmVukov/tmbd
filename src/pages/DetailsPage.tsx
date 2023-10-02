import { useParams } from 'react-router-dom';
import { displayMovieGenres } from '../utils';
import { useAppContext } from '../hooks/useAppContext';
import { useDetailsData } from '../hooks/useDetailsData';
import { useScrollTop } from '../hooks/useScrollTop';
import { useScreenSize } from '../hooks/useScreenSize';
import { Image, Container, Row, Col, Spinner } from 'react-bootstrap';
import Grid from '../components/Grid';

const DetailsPage = () => {
  const { movieId } = useParams();
  useDetailsData(movieId!);
  useScrollTop();

  const { movieDetails, credits, videos, recommended, genres, loading } =
    useAppContext();
  const { width } = useScreenSize();

  const movieImgUrl =
    width < 992
      ? `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`
      : `https://image.tmdb.org/t/p/w300${movieDetails?.poster_path}`;

  // there is a bunch of videos, just take the first one and hope for the best :)
  const videoKey = videos[0]?.key;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoKey}`;

  // there is a bunch of actors in response, cut the them to first 8
  const actors = credits.slice(0, 8);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner variant="primary"/>
      </div>
    );
  }

  return (
    <Container className="details-container">
      <Row>
        <Col className="text-center">
          <h1>
            <strong>{movieDetails?.original_title}</strong>
          </h1>
          <div>{displayMovieGenres(movieDetails?.genres)}</div>
          <p className="mt-3">{movieDetails?.runtime} minutes</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="details-poster-col" xs={12} lg={6}>
          <Image
            className="mb-5"
            src={movieImgUrl}
            alt={movieDetails?.original_title}
            fluid
          />
        </Col>
        <Col xs={12} lg={6} className="details-video-col">
          <iframe
            title="Movie Trailer"
            width="560"
            height="315"
            src={youtubeEmbedUrl}
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="details-overview-col" xs={12} lg={6}>
          <h3>
            <b>Overview</b>
          </h3>
          <p className="details-overview">{movieDetails?.overview}</p>
          <p className="mt-3">
            <b>Release Date: </b>
            {movieDetails?.release_date}
          </p>
          <p className="mt-3">
            <b>Budget:</b> {movieDetails?.budget?.toLocaleString('en-US')} $
          </p>
          <p className="mt-3">
            <b>Revenue:</b> {movieDetails?.revenue?.toLocaleString('en-US')} $
          </p>
        </Col>
        <Col className="details-cast-col" xs={12} lg={6}>
          <h3>
            <b>Top Cast</b>
          </h3>
          <Row className="mt-3">
            {actors.map((actor, i) => (
              <Col key={i} xs={6} sm={3} className='mb-3 text-center'>
                <Image
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  className="details-actor-img"
                />
                <p>
                  <b>{actor.name}</b>
                </p>
                <small>{actor.character}</small>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            <b>Recommended Movies</b>
          </h3>
          {!recommended.length ? (
            <h6>No recommended movies currently :(</h6>
          ) : (
            <Grid movieData={recommended} allGenres={genres} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
