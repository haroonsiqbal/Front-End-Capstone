import React, { Component } from 'react';
import EditModalHelper from './EditModalHelper';
import CommentModalHelper from '../comments/CommentModalHelper'
import MapModalHelper2 from '../maps/MapModalHelper2';
import LocationManager from '../../modules/LocationManager';
import "../search/Search.css"

class LocationCard extends Component {
  
  render() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
    if (this.props.shop.location.userId === currentUser.id) {
      return (
        <div className="card">
          <div className="card-content">
            <h2 className="card-h2"><span className="card-locationName">{this.props.shop.location.name}</span></h2>
            <p><img className="icon"src={ require('../img/address-icon-red.png') } alt="outlet icon"/>Address: {this.props.shop.location.address}</p>
            <p><img className="icon"src={ require('../img/neighborhood-icon-red.png') } alt="outlet icon"/>Neighborhood: {this.props.shop.location.neighborhood}</p>
            <p><img className="icon"src={ require('../img/outlet-icon-red.png') } alt="outlet icon"/>Outlets: {this.props.shop.location.outlets}</p>
            <MapModalHelper2 {...this.props} />
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
            <p><img className="icon"src={ require('../img/address-icon-red.png') } alt="address icon"/>Address: {this.props.shop.location.address}</p>
            <p><img className="icon"src={ require('../img/neighborhood-icon-red.png') } alt="neighborhood icon"/>Neighborhood: {this.props.shop.location.neighborhood}</p>
            <p><img className="icon"src={ require('../img/outlet-icon-red.png') } alt="outlet icon"/>Outlets: {this.props.shop.location.outlets}</p>
            <MapModalHelper2 {...this.props} />
            <button className="card-button" onClick={() => this.props.deleteLocation(this.props.shop.id)}>DELETE</button>
            <CommentModalHelper {...this.props} />
          </div>
        </div></>
    }
  }
}

export default LocationCard;