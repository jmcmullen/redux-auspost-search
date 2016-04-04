import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddress } from '../actions/index';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ query: event.target.value });
    this.props.fetchAddress(this.state.query);
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="search">
        <input
          placeholder="Search for your suburb"
          className="form-control"
          onChange={this.onInputChange} />
      </div>
    );
  }
}

export default connect(null, { fetchAddress })(Search);
