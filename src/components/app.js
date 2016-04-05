import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WikiList from '../containers/wiki_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WikiList />
      </div>
    );
  }
}
