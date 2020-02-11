import React,{Component} from'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Redirect } from 'react-router';
 
export class MapContainer extends Component {
    render() {
      const MyStyle={
        height: 300,
        width:100 +"%",
        backgroundColor:'Red',

      }
      return (
        <Map 
        style={MyStyle} 
         google={this.props.google} 
         zoom={14}
         initialCenter={{
          lat: 50.855850,
          lng: 0.276890,
         
        }}
        >
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
             
          </InfoWindow>
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper(
      {
    apiKey: ("AIzaSyAdefjwvs11FUltTgypMpJjJE-37aZA8AY")
  })(MapContainer)