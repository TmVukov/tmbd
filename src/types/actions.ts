import {
  SET_TOP_RATED,
  SET_UPCOMING,
  SET_GENRES,
  SET_SEARCH_DATA,
  SET_SEARCH_TERM,
  SET_PAGE,
  SET_MOVIE_DETAILS,
  SET_CREDITS,
  SET_VIDEOS,
  SET_RECOMMENDED,
  SET_LOADING,
} from '../constants';
import { Movie, Genre, Search, Details, Credit, Video } from './interfaces';

export interface SetTopRatedAction {
  type: typeof SET_TOP_RATED;
  payload: Movie[];
}

export interface SetUpcomingAction {
  type: typeof SET_UPCOMING;
  payload: Movie[];
}

export interface SetGenresAction {
  type: typeof SET_GENRES;
  payload: Genre[];
}

export interface SetSearchDataAction {
  type: typeof SET_SEARCH_DATA;
  payload: Search;
}

export interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

export interface SetPageAction {
  type: typeof SET_PAGE;
  payload: number;
}

export interface SetMoveDetailsAction {
  type: typeof SET_MOVIE_DETAILS;
  payload: Details;
}

export interface SetCreditsAction {
  type: typeof SET_CREDITS;
  payload: Credit[];
}

export interface SetVideosAction {
  type: typeof SET_VIDEOS;
  payload: Video[];
}

export interface SetRecommendedAction {
  type: typeof SET_RECOMMENDED;
  payload: Movie[];
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type AppActions =
  | SetTopRatedAction
  | SetUpcomingAction
  | SetGenresAction
  | SetSearchDataAction
  | SetSearchTermAction
  | SetPageAction
  | SetMoveDetailsAction
  | SetCreditsAction
  | SetVideosAction
  | SetRecommendedAction
  | SetLoadingAction;
