import React, { Component } from 'react';
import EditModalHelper from './EditModalHelper';
import CommentModalHelper from '../comments/CommentModalHelper'

class LocationCard extends Component {
  
  render() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
    if (this.props.shop.location.userId === currentUser.id) {
      return (
        <div className="card">
          <div className="card-content">
            <h2 className="card-h2"><span className="card-locationName">{this.props.shop.location.name}</span></h2>
            <p>Address: {this.props.shop.location.address}</p>
            <p>Neighborhood: {this.props.shop.location.neighborhood}</p>
            <p>Outlets: {this.props.shop.location.outlets}</p>
            <EditModalHelper {...this.props} />
            <button className="card-button" onClick={() => this.props.deleteLocation(this.props.shop.id)}>DELETE</button>
            <CommentModalHelper {...this.props} />
          </div>
        </div>
      );
    } else {
      return <>
        <div className="card">
          <div className="card-content">
            <h2 className="card-h2"><span className="card-locationName">{this.props.shop.location.name}</span></h2>
            <p>Address: {this.props.shop.location.address}</p>
            <p>Neighborhood: {this.props.shop.location.neighborhood}</p>
            <p>Outlets: {this.props.shop.location.outlets}</p>
            <button className="card-button" onClick={() => this.props.deleteLocation(this.props.shop.id)}>DELETE</button>
            <CommentModalHelper {...this.props} />
          </div>
        </div></>
    }
  }
}

export default LocationCard;