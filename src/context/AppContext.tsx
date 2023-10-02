import { useReducer, createContext, Dispatch, ReactNode } from 'react';
import {
  Movie,
  Genre,
  Search,
  Details,
  Credit,
  Video,
} from '../types/interfaces';
import { AppActions } from '../types/actions';
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

interface AppContextProps {
  searchData: Search;
  searchTerm: string;
  topRated: Movie[];
  upcoming: Movie[];
  genres: Genre[];
  movieDetails: Details;
  credits: Credit[];
  videos: Video[];
  recommended: Movie[];
  page: number;
  loading: boolean;
  dispatch: Dispatch<AppActions>;
}

interface AppProviderProps {
  children: ReactNode;
}

const initialState: AppContextProps = {
  searchData: {
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
  },
  searchTerm: '',
  topRated: [],
  upcoming: [],
  genres: [],
  movieDetails: {} as Details,
  credits: [],
  videos: [],
  recommended: [],
  page: 1,
  loading: false,
  dispatch: () => {},
};

const reducer = (state: AppContextProps, action: AppActions) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_DATA:
      return { ...state, searchData: payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case SET_TOP_RATED:
      return { ...state, topRated: payload };
    case SET_UPCOMING:
      return { ...state, upcoming: payload };
    case SET_GENRES:
      return { ...state, genres: payload };
    case SET_MOVIE_DETAILS:
      return { ...state, movieDetails: payload };
    case SET_CREDITS:
      return { ...state, credits: payload };
    case SET_VIDEOS:
      return { ...state, videos: payload };
    case SET_RECOMMENDED:
      return { ...state, recommended: payload };
    case SET_PAGE:
      return { ...state, page: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const AppContext = createContext<AppContextProps>(initialState);

export default function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerValue = {
    ...state,
    dispatch,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}
