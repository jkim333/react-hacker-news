import React, { useEffect, useReducer } from 'react';
import { reducer } from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const AppContext = React.createContext();

const initialState = {
  stories: [],
  loading: true,
  page: 0,
  query: 'react',
  noPages: 0,
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    try {
      dispatch({ type: 'loading', payload: true });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: 'set-stories', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
