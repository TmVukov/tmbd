import { useRef } from 'react';
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { useAppContext } from '../hooks/useAppContext';
import { handleSearch } from '../utils';
import { SET_SEARCH_TERM } from '../constants';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Nav = () => {
  const { searchTerm, page, dispatch } = useAppContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isDetailsPage = pathname.startsWith('/movie-details');

  const handleSearchAction = () => {
    handleSearch(searchTerm, page, dispatch);
    navigate(`/search-results/${page}`);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchAction();
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary navbar">
      <Link to={'/'} className="logo">
        <h1>
          <b>TheMovies</b>
        </h1>
      </Link>
      {!isDetailsPage && (
        <Row className="mx-auto align-items-center">
          <Col className="search-input" xs={12} md={8}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="navbar-input"
              onChange={(e) =>
                dispatch({ type: SET_SEARCH_TERM, payload: e.target.value })
              }
              onKeyUp={handleKeyPress}
              ref={inputRef}
            />
          </Col>
          <Col xs={12} md={4}>
            <Button
              onClick={handleSearchAction}
              type="button"
              className="navbar-btn"
            >
              Search
            </Button>
          </Col>
        </Row>
      )}
      <div className="navbar-helper"></div>
    </Navbar>
  );
};

export default Nav;
