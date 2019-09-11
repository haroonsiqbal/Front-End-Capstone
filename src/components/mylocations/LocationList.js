import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

componentDidMount(){
    LocationManager.getAll()
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

deleteLocation = id => {
    LocationManager.delete(id)
    .then(() => {
      LocationManager.getAll()
      .then((newLocations) => {
        this.setState({
            locations: newLocations
        })
      })
    })
  }

getAllLocations = () => {
  LocationManager.getAll()
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}
  
render(){
    return(
    <React.Fragment>
        <div className="container-cards">
      {this.state.locations.map(shop =>
        <LocationCard
            key={shop.id}
            shop={shop}
            deleteLocation={this.deleteLocation}
            getAllLocations={this.getAllLocations}
            {...this.props}
            />
      )}
        </div>
    </React.Fragment>
    )
}
}

export default LocationList