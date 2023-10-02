import { useEffect } from 'react';
import { useAppContext } from './useAppContext';
import { Search } from '../types/interfaces';
import {
  SET_SEARCH_DATA,
  SET_SEARCH_TERM,
  SET_CREDITS,
  SET_PAGE,
} from '../constants';

export const useResetData = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: SET_SEARCH_DATA, payload: {} as Search });
    dispatch({ type: SET_SEARCH_TERM, payload: '' });
    dispatch({ type: SET_CREDITS, payload: [] });
    dispatch({ type: SET_PAGE, payload: 1 });
  }, [dispatch]);
};
