export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
export const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
export const SEARCH_MOVIE_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

export const SET_TOP_RATED = 'SET_TOP_RATED';
export const SET_UPCOMING = 'SET_UPCOMING';
export const SET_GENRES = 'SET_GENRES';
export const SET_SEARCH_DATA = 'SET_SEARCH_DATA';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_PAGE = 'SET_PAGE';
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const SET_CREDITS = 'SET_CREDITS';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_RECOMMENDED = 'SET_RECOMMENDED';
export const SET_LOADING = 'SET_LOADING';
