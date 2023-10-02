import { useAppContext } from '../hooks/useAppContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Movie } from '../types/interfaces';
import Grid from '../components/Grid';
import PaginationComponent from '../components/Pagination';
import { Spinner } from 'react-bootstrap';

const SearchPage = () => {
  const {
    searchData: { total_results, results },
    genres: allGenres,
    loading,
  } = useAppContext();

  useScrollTop();

  return (
    <main className="d-flex flex-column align-items-center">
      <h5 className="text-center mt-3">
        Total results: <b>{total_results}</b>
      </h5>

      {loading ? (
        <Spinner />
      ) : !results.length ? (
        <h5>Sorry, not results for this query :(</h5>
      ) : (
        <Grid movieData={results as Movie[]} allGenres={allGenres} />
      )}
      <PaginationComponent />
    </main>
  );
};

export default SearchPage;
