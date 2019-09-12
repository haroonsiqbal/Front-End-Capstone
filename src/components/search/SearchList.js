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
  
render(){
    return(
    <React.Fragment>
        <div className="container-cards">
      {this.props.locations.map(shop =>
        <SearchCard
            key={shop.id}
            shop={shop}
            {...this.props}
            />
      )}
        </div>
    </React.Fragment>
    )
}
}

export default SearchList