import React, { Component } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

// let [selectedLocation, setSelectedLocation] = useState(null);

class MyMap extends Component {
  state = {
    selectedLocation: null
  };

  render() {
    let { selectedLocation } = this.state;
    let MapWithInfoWindow = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 32.314736, lng: -64.7479369 }}
        >
          {props.allLocations.map(elt => (
            <Marker
              key={elt.id}
              position={{
                lat: elt.latitude,
                lng: elt.longitude
              }}
              onClick={() => {
                this.setState({ selectedLocation: elt });
              }}
              icon={{
                url:
                  "https://www.clipartwiki.com/clipimg/full/14-141149_watermelon-black-and-white-clipart-alert-icon-blue.png",
                scaledSize: new window.google.maps.Size(20, 20)
              }}
            />
          ))}
          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.latitude,
                lng: selectedLocation.longitude
              }}
              onCloseClick={() => {
                this.setState({ selectedLocation: null });
              }}
            >
              <div style={{ width: "15rem" }}>
                <h2
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    fontSize: "1rem",
                    justifyContent: "center"
                  }}
                >
                  {selectedLocation.name}
                </h2>
                <img
                  src={selectedLocation.avatar}
                  alt="location"
                  style={{ width: "12rem" }}
                />
                <p style={{ display: "flex", flexWrap: "wrap" }}>
                  {selectedLocation.tips}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ))
    );

    return <MapWithInfoWindow {...this.props} />;
  }
}

export default MyMap;
