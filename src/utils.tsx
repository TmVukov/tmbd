import { Movie, Genre } from './types/interfaces';
import { AppActions } from './types/actions';
import {
  SEARCH_MOVIE_BASE_URL,
  SET_SEARCH_DATA,
  SET_LOADING,
  API_KEY,
} from './constants';
import Badge from 'react-bootstrap/Badge';

export const fetchUrls = async (urls: string[]) => {
  try {
    const data = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        return res.json();
      }),
    );

    return data.map((d) => {
      switch (true) {
        // return movie details results
        case 'budget' in d:
          return d;
        default:
          return d.results || d.genres || d.cast;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchData = async (url: string) => {
  try {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const data = await result.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
  }
};

export const getMovieGenres = (arr: Genre[], obj: Movie) => {
  const result = arr.filter((genre) => obj.genre_ids.includes(genre.id));
  return result;
};

export const displayMovieGenres = (arr: Genre[]) => {
  return arr?.map((genre, i) => (
    <Badge key={i} bg="info" className="badge">
      {genre.name}
    </Badge>
  ));
};

export const handleSearch = async (
  searchTerm: string,
  page: number,
  dispatch: React.Dispatch<AppActions>,
) => {
  dispatch({ type: SET_LOADING, payload: true });
  const searchUrl = `${SEARCH_MOVIE_BASE_URL}&query=${searchTerm}&page=${page}`;
  const result = await fetchData(searchUrl);
  
  dispatch({ type: SET_SEARCH_DATA, payload: result });
  dispatch({ type: SET_LOADING, payload: false });
};

export const getMovieDetailsUrls = (movieId: string) => {
  const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  const recommendedUrl = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`;

  return [detailUrl, creditsUrl, videosUrl, recommendedUrl];
};
