import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '9186a068';
  const APP_KEY = '2b40af8c45e601045cbee4281405bdbd';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type='submit'>Search</button>
      </form>
    </div>
  )
}

export default App;
