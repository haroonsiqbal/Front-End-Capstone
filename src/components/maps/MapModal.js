import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapManager from '../../modules/MapManager';

class MapModal2 extends Component {
    state = {
        center: {
            lat: 36.164552,
            lng: -86.781070
        }
      };

    componentDidMount() {
        this.getMapObject();
      }

    getMapObject = () => {
        const address = this.props.shop.address
        const split = address.split(" ")
        MapManager.getLatLng(split[0], split[1], split[2]).then(mapObject => {
            this.setState({
                center: mapObject.results[0].geometry.location
            });

        })
      }



    render() {
        
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        
        return (
            <Map
              google={this.props.google}
              zoom={18}
              style={mapStyles}
              center={this.state.center}
            >
            <Marker
              title={this.props.shop.name}
              name={this.props.shop.name}
              position={this.state.center}
            />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB_5a30VuUkUUbs6arxItCU_a2jqrQjmyw'
  })(MapModal2);