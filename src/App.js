import React, { Component } from 'react';
import Searchbar from './containers/Searchbar/Searchbar';
import RandomArticle from './components/RandomArticle/RandomArticle';
import ResultList from './components/ResultList/ResultList';
import './App.css';

class App extends Component {
  state = {
    results: []
  }
  setResults = (results) => {
    this.setState({ results });
  }
  render() {
    return (
      <div className="container-fluid">
        <div id="holder" className="text-center">
          <h1>Wikipedia Viewer</h1>
          <h6>Search for a Wikipedia Article</h6>
          <Searchbar setResults={this.setResults} />
          <RandomArticle />
        </div>
        <ResultList results={this.state.results} />
      </div>
    );
  }
};

export default App;
