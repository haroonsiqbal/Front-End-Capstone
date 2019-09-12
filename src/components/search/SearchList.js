import React, { Component } from 'react'
import SearchCard from './SearchCard'
import LocationManager from '../../modules/LocationManager';

class SearchList extends Component {
state = {
  userId: 0,
  locationId: 0
}

handleFieldChange = evt => {
  const stateToChange = {};
  stateToChange[evt.target.id] = evt.target.value;
  this.setState(stateToChange);
};

// favLocation = () => {
//   const currentUser = JSON.parse(sessionStorage.getItem("credentials"))

//   this.setState({ loadingStatus: true });
//     const userLocation = {
//         userId: currentUser.id,
//         locationId: this.props.shop.id
//     };
//     console.log(userLocation)
//   LocationManager.post(userLocation)
// };
  
render(){
    return(
    <React.Fragment>
        <div className="container-cards">
      {this.props.locations.map(shop =>
        <SearchCard
            key={shop.id}
            shop={shop}
            // favLocation={this.favLocation}
            {...this.props}
            />
      )}
        </div>
    </React.Fragment>
    )
}
}

export default SearchList