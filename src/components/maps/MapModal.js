import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapManager from '../../modules/MapManager';

class MapModal extends Component {
    state = {
        center: {
            lat: 0,
            lng: 0
        }
      };

    componentDidMount() {
        this.getMapObject();
      }
    
    getMapObject = () => {
        MapManager.getLatLng("15", "Hermitage", "Ave").then(mapObject => {
            this.setState({
                center: mapObject.results[0].geometry.location
            });
            //console.log(center)

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
              center={this.state.center}
            >
                <Marker position={this.state.center} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB_5a30VuUkUUbs6arxItCU_a2jqrQjmyw'
  })(MapModal);