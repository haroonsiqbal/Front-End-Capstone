import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class SearchCard extends Component {
  
  favLocation = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
  
    this.setState({ loadingStatus: true });
      const userLocation = {
          userId: currentUser.id,
          locationId: this.props.shop.id
      };
      console.log(userLocation)
    LocationManager.fav(userLocation)
  };

  render() {
      return (
        <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-locationName">{this.props.shop.name}</span></h2>
            <p>Address: {this.props.shop.address}</p>
            <p>Neighborhood: {this.props.shop.neighborhood}</p>
            <p>Outlets: {this.props.shop.outlets}</p>
            <button>Comments</button>
            <button onClick={() => this.favLocation(this.props.shop.id)}>Add</button>
          </div>
        </div>
      );
    } 
  }

export default SearchCard;