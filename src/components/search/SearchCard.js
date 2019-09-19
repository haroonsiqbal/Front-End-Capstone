import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import "./Search.css"

class SearchCard extends Component {
  state = {
    text: "ADD"
  }

  changeText = (text) => {
    this.setState({ text });
  }

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

  favWrapper = () => {
    this.changeText("ADDED")
    this.favLocation(this.props.shop.id)
  }

  render() {
      const { text } = this.state
      return (
        <div className="card">
          <div className="card-content">
            <h2 className="card-h2"> <span className="card-locationName">{this.props.shop.name}</span></h2>
            <p className="card-p"><img className="icon"src={ require('../img/address-icon-red.png') } alt="outlet icon"/>Address: {this.props.shop.address}</p>
            <p className="card-p"><img className="icon"src={ require('../img/neighborhood-icon-red.png') } alt="outlet icon"/>Neighborhood: {this.props.shop.neighborhood}</p>
            <p className="card-p"><img className="icon"src={ require('../img/outlet-icon-red.png') } alt="outlet icon"/>Outlets: {this.props.shop.outlets}</p>
            <button className="card-button">COMMENTS</button>
            <button className="card-button" onClick={() => this.favWrapper()}>{text}</button>
          </div>
        </div>
      );
    } 
  }

export default SearchCard;