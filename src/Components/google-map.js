import React from "react";
import geocodeAdresses from "./geocodeAdresses";
import {Map, InfoWindow, GoogleApiWrapper, Marker} from 'google-maps-react';

export class GoogleMap extends React.Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 43.5963020324707,
        lng: 1.4221688508987427
      },
      zoom: 12,      
      markers: [],
      infowindows:[],
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      addresses:[
      "4 Rue des Casernes, 31000",
      "4 Rue Paul Darbefeuille",
      "266 Avenue de Fronton",
      "9 Rue Francisque Sarcey",
      "1 Allées Charles de Fitte",
      "5 Avenue de Casselardit",
      "2 Avenue de Lombez"
      ]
    };
  }
  
  onMarkerClick(props, marker) {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose(){    
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  }
  onMapClicked(props){
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  geocode() {
    geocodeAdresses(this.state.addresses)
    .then(geocode => {    
      const markersArray = geocode.map(({id, adresse,lat, lng }) => ({id,adresse,lat,lng}));
      this.setState({
        markers:markersArray
      })
    })
  }

  componentDidMount() {
    this.geocode();    
  }
  renderMarker() {
    return this.state.markers.map(({lat,adresse,lng,id}) => (
      <Marker 
      onClick={this.onMarkerClick.bind(this)}
      key={id}
      adresse={adresse}
      position={
        {lat,lng }
      }        
      />
      ));
  }
  render() {
    return (
      <Map className='map' google={this.props.google} zoom={this.state.zoom} initialCenter={this.state.center}> 

      {this.renderMarker()}
      <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      >
      <div>
      <p>{this.state.selectedPlace.adresse}</p>
      </div>
      </InfoWindow>

      </Map>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(GoogleMap)
