import React, { Component } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

class LocationList extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    this.getFiltered();
  }

  getFiltered = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"));
    const userId = currentUser.id
    LocationManager.getFavs(userId).then(locations => {
      console.log(locations)
      this.setState({
        locations: locations
      });
    });
  }

  deleteLocation = id => {
    LocationManager.deleteFav(id).then(() => {
      this.getFiltered()
    });
  };

  getAllLocations = () => {
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-cards">
          {this.state.locations.map(shop =>
        <LocationCard
            key={shop.id}
            shop={shop}
            deleteLocation={this.deleteLocation}
            getFiltered={this.getFiltered}
            {...this.props}
            />
      )}
        </div>
      </React.Fragment>
    );
  }
}

export default LocationList;
