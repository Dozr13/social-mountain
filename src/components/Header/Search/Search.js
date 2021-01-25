import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      searchStr: ''
    }

    this.search = this.search.bind( this )
  }

  change( val ) {
    this.setState({
      searchStr: val
    })
    this.props.search( val )
  }

  search() {
    this.props.search( this.state.searchStr )
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={ e => this.change( e.target.value ) } placeholder="Search Your Feed" />

          <SearchIcon onClick={ this.search } id="Search__icon" />
        </div>
        
      </section>
    )
  }
}