import React, { Component } from 'react';
import './SearchBar.css';



export default class SearchBar extends Component {

    state = {
        term: '',
        location: '',
        sortBy: ''
    }

    sortByOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    }


    getSortByClass = (sortByOption) => {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        return '';
    }

    handleSortByChange = (sortByOption) => {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handleSearch = (e) => {
        const { term, location, sortBy } = this.state;
        this.props.searchYelp(term, location, sortBy);
        e.preventDefault();
    }

    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li onClick={()=>{this.handleSortByChange(sortByOptionValue)}}
                className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}>
                {sortByOption}
            </li>);
        })
    }



    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div onClick={this.handleSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }

}