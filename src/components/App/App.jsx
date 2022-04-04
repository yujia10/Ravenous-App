import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


export default class App extends Component {

  state = {
    businesses: []
  }

  searchYelp =(term, location, sortBy )=>{
    Yelp.search(term, location, sortBy ).then(businesses => {
      this.setState({businesses: businesses})
    })
  }
   
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}
