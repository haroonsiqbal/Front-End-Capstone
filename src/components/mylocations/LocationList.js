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

  getFiltered() {
    const currentUser = JSON.parse(sessionStorage.getItem("credentials"));
    const userId = currentUser.id;
    LocationManager.getFavs(userId).then(locations => {
      console.log(locations);
      const filtered = locations.usersLocations.map(userLocation => {
        return userLocation.locationId;
      });
      //create empty array of userLocations
      //run filtered.for each with a fetch call and then append the result of each fetch call to state.
      //Then set userLocations into state, and then you can use the data in your render.
      const userLocations = [];
      filtered.forEach(id => {
        LocationManager.getIndividualLocation(id).then(locationObject => {
          userLocations.push(locationObject);
        });
        console.log(userLocations);
      });
      this.setState({
        locations: userLocations
      });
    });
  }

  deleteLocation = id => {
    LocationManager.delete(id).then(() => {
      LocationManager.getAll().then(newLocations => {
        this.setState({
          locations: newLocations
        });
      });
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
