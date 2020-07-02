import React from 'react';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <SearchForm/>
      <ResultsList/>
    </div>
  );
}

export default App;
