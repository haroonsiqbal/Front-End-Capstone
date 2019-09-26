import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapManager from '../../modules/MapManager';

class MapModal extends Component {
    state = {
        mapObject: {}
      };

    componentDidMount() {
        this.getMapObject();
      }
    
    getMapObject = () => {
        MapManager.getLatLng("235", "5th", "Ave").then(mapObject => {
            this.setState({
                mapObject: mapObject
            });
            console.log(this.state.mapObject.results[0].geometry.location.lat)
            console.log(this.state.mapObject.results[0].geometry.location.lng)

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
              zoom={17}
              style={mapStyles}
              initialCenter={{lat: 36.1640461, lng: -86.78104760000001}}
              center={{ lat: `{this.state.mapObject.results[0].geometry.location.lat}`, lng: `{this.state.mapObject.results[0].geometry.location.lng}` }}
            >
                <Marker name={""} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB_5a30VuUkUUbs6arxItCU_a2jqrQjmyw'
  })(MapModal);