import React, { Component } from 'react';

class LocationCard extends Component {
  
  render() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
    if (this.props.shop.userId === currentUser.id) {
      return (
        <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-locationName">{this.props.shop.name}</span></h2>
            <p>Address: {this.props.shop.address}</p>
            <p>Neighborhood: {this.props.shop.neighborhood}</p>
            <p>Outlets: {this.props.shop.outlets}</p>
            <button
              onClick={() => { this.props.history.push(`/locations/${this.props.shop.id}/edit`) }}>Edit</button>
            <button onClick={() => this.props.deleteLocation(this.props.shop.id)}>Delete</button>
            <button>Comments</button>
          </div>
        </div>
      );
    } else {
      return <>
        <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-locationName">{this.props.shop.name}</span></h2>
            <p>Address: {this.props.shop.address}</p>
            <p>Neighborhood: {this.props.shop.neighborhood}</p>
            <p>Outlets: {this.props.shop.outlets}</p> 
            <button onClick={() => this.props.deleteLocation(this.props.shop.id)}>Delete</button>
            <button>Comments</button>
          </div>
        </div></>
    }
  }
}

export default LocationCard;