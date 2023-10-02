export interface Movie {
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  id: number;
}

export interface Person {
  name: string;
  original_name: string;
  known_for_department: string;
  popularity: number;
  profile_path: string;
  known_for: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Search {
  page: number;
  results: Movie[] | Person[];
  total_pages: number | null;
  total_results: number | null;
}

export interface Details extends Movie {
  runtime: number;
  budget: number;
  revenue: number;
  overview: string;
  genres: Genre[];
}

export interface Credit {
  name: string;
  character: string;
  profile_path: string;
}

export interface Video {
  key: string;
}
