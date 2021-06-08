import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import CharacterSheet from './Components/CharacterSheet.js'
import Blog from './Components/Blog.js'
import './App.css';
import GitHubLang from './Components/GitHubLang.js';

const App = () => {

  return (
    <Router>
      <header className='header'>
        <h1 className='header title'>Blog App</h1>
        <NavBar />
      </header>
      <Route path='/character_sheet' component={CharacterSheet}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/githublang' component={GitHubLang}/>
    </Router>
  );
}

export default App;
