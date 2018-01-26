import React, { Component } from 'react';
import axios from 'axios';

class Searchbar extends Component {
  state = {
    searchTerm: '',
    results: []
  }
  onInputChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }
  createResultObj = (d1, d2, d3) => {
    return { title: d1, description: d2, href: d3 };
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.state.searchTerm}&format=json&callback=?`;
    console.log(url);
    axios.get(url)
    .then(({data}) => {
      let results = [];
      data[1].forEach((title, i) => {
        results.push(
          this.createResultObj(data[1][i], data[2][i], data[3][i])
        );
      });
      this.setState((prevState) => {
        return {results};
      }, () => {
        this.props.setResults(this.state.results);
        this.setState({results: [], searchTerm: ''});
      });
    })
    .catch(error => {
      alert('Your search term returned no results');
    });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          autoFocus
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
};

export default Searchbar;