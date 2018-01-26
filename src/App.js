import React, { Component } from 'react';
import Searchbar from './containers/Searchbar/Searchbar';
import ResultList from './components/ResultList/ResultList';
import './App.css';

class App extends Component {
  state = {
    results: []
  }
  setResults = (results) => {
    this.setState({results});
  }
  render() {
    return (
      <div>
        <h1>Wikipedia Viewer</h1>
        <h4>Search for a Wikipedia Article</h4>
        <Searchbar setResults={this.setResults}/>
        <ResultList results={this.state.results}/>
      </div>
    );
  }
};

export default App;
