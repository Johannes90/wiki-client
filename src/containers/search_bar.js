import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWiki } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWiki(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <div className="search-bar">
        <h2>Wikipedia Search</h2>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            type="text" className="form-control"
            placeholder="Enter your Wiki Search term!"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Go!</button>
          </span>
        </form>
        <a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">Or show a random article</a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWiki }, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
