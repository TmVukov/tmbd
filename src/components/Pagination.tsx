import Pagination from 'react-bootstrap/Pagination';
import { useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';
import { SET_PAGE } from '../constants';
import { handleSearch } from '../utils';

const PaginationComponent = () => {
  const items = [];
  const {
    searchData: { total_pages },
    searchTerm,
    page,
    dispatch,
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: SET_PAGE, payload: 1 });
  }, [searchTerm, dispatch]);

  const handleNewPage = (pageNumber: number) => {
    dispatch({ type: SET_PAGE, payload: pageNumber });
    handleSearch(searchTerm, pageNumber, dispatch);
    navigate(`/search-results/${pageNumber}`);
  };

  if (total_pages) {
    for (let pageNumber = 1; pageNumber <= total_pages; pageNumber++) {
      items.push(
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === page}
          onClick={() => handleNewPage(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>,
      );
    }
  }

  return (
    <Pagination size="sm" className="pagination">
      {items}
    </Pagination>
  );
};

export default PaginationComponent;
