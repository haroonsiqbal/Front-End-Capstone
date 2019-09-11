import React, { Component } from 'react';

class SearchCard extends Component {
  
  render() {
      return (
        <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-locationName">{this.props.shop.name}</span></h2>
            <p>Address: {this.props.shop.address}</p>
            <p>Neighborhood: {this.props.shop.neighborhood}</p>
            <p>Outlets: {this.props.shop.outlets}</p>
            <button>Comments</button>
            <button>Add</button>
          </div>
        </div>
      );
    } 
  }

export default SearchCard;