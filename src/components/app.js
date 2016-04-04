import React from 'react';
import { Component } from 'react';
import Search from './search';
import Results from './results';

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
    );
  }
}
