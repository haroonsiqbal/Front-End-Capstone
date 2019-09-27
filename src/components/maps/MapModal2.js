import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import MapManager from '../../modules/MapManager';

class MapModal extends Component {
    state = {
        center: {
            lat: 36.164552,
            lng: -86.781070
        },
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

    componentDidMount() {
        this.getMapObject();
      }

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    getMapObject = () => {
        const address = this.props.shop.location.address
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
            <Marker onClick={this.onMarkerClick}
              title={this.props.shop.location.name}
              name={this.props.shop.location.name}
              position={this.state.center}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
            <div>
              <h2 className="card-h2">{this.props.shop.location.name}</h2>
              <p><img className="icon"src={ require('../img/address-icon-red.png') } alt="address icon"/>Address: {this.props.shop.location.address}</p>
              <p><img className="icon"src={ require('../img/neighborhood-icon-red.png') } alt="neighborhood icon"/>Neighborhood: {this.props.shop.location.neighborhood}</p>
              <p><img className="icon"src={ require('../img/outlet-icon-red.png') } alt="outlet icon"/>Outlets: {this.props.shop.location.outlets}</p>
            </div>
        </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB_5a30VuUkUUbs6arxItCU_a2jqrQjmyw'
  })(MapModal);