import React, { Component } from 'react';
import { connect } from 'react-redux';

class WikiList extends Component {
  render() {
    const page = this.props.wiki.pages;

    if (!this.props.wiki.pages) {
      return (<div></div>);
    }
    return (
      <ul className="list-group">
        {Object.keys(page).map(function(key) {
            let url = `https://en.wikipedia.org/?curid=${key}`;
            return (
              <a key={key} href={url} target="_blank"><li key={key} className="list-group-item">{page[key].title} - {page[key].extract}</li></a>
            );
        },this)}
      </ul>
    );
  }
}

function mapStateToProps({ wiki }) {
  return { wiki };
}

export default connect(mapStateToProps)(WikiList);
