import React, { useContext } from 'react';
import { AppContext } from './context';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Loading from './Loading';

function App() {
  const { state } = useContext(AppContext);

  return (
    <main>
      <div className='container'>
        <SearchForm />
        {state.loading ? <Loading /> : <Stories />}
      </div>
    </main>
  );
}

export default App;
