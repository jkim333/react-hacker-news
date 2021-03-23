import React, { useContext } from 'react';
import { AppContext } from './context';

export default function SearchForm() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h1>search hacker news</h1>
      <input
        type='text'
        value={state.query}
        onChange={(e) =>
          dispatch({ type: 'set-query', payload: e.target.value })
        }
      />
      <div className='page-controls'>
        <button
          className='page-controls__btn'
          onClick={(e) => dispatch({ type: 'prev' })}
        >
          prev
        </button>
        <p className='page-controls__info'>{`${state.page + 1} of ${
          state.noPages
        }`}</p>
        <button
          className='page-controls__btn'
          onClick={(e) => dispatch({ type: 'next' })}
        >
          next
        </button>
      </div>
    </form>
  );
}
