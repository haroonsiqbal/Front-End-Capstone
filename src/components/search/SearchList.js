import React, { Component } from 'react'
import SearchCard from './SearchCard'
import LocationManager from '../../modules/LocationManager'

class SearchList extends Component {
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

// deleteLocation = id => {
//     LocationManager.delete(id)
//     .then(() => {
//       LocationManager.getAll()
//       .then((newLocations) => {
//         this.setState({
//             locations: newLocations
//         })
//       })
//     })
//   }
  
render(){
    return(
    <React.Fragment>
        <div className="container-cards">
      {this.state.locations.map(shop =>
        <SearchCard
            key={shop.id}
            shop={shop}
            //deleteLocation={this.deleteLocation} *add location?
            {...this.props}
            />
      )}
        </div>
    </React.Fragment>
    )
}
}

export default SearchList