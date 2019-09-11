import React, { Component } from 'react'
import SearchCard from './SearchCard'

class SearchList extends Component {

render(){
    return(
    <React.Fragment>
        <div className="container-cards">
      {this.props.locations.map(shop =>
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