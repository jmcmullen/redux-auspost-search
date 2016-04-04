import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  renderResult(address) {
    console.log(address);
    return (
      <div key={address.id} className="result">
        {address.location}, <span className="details">{address.postcode} {address.state}</span>
      </div>
    );
  }
  render() {
    const { localities } = this.props.address;
    if(!localities) {
      return (
        <p className="no-results">No results found</p>
      );
    }
    return (
      <div className="results">
      {localities.locality.map(this.renderResult)}
      </div>
    );
  }
}

function mapStateToProps({ address }) {
  return { address };
}

export default connect(mapStateToProps)(Results);
