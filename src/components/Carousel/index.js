import React, { Component } from "react";
import Card from "../card";
import Tag from "../tags";
import Nav from "../navbar";
import MyMap from "../map";
import Footer from "../footer";
import "./carousel.css";
import Axios from "axios";

class Carousel extends Component {
  state = {
    categories: [],
    allLocations: [],
    filteredLocations: [],
    selectedId: undefined
  };

  componentDidMount() {
    this.getAllData();
    // document.getElementsByClassName(".slide").hiSlide();
    // this.getData();
    // this.getCategories();
  }

  url = "https://bermudabeaches.herokuapp.com";
  getData = () => {
    Axios.get(`${this.url}/business`).then(response => {
      console.log(response.data.results);
      this.setState({
        allLocations: response.data.results,
        filteredLocations: response.data.results
      });
    });
  };

  getCategories = () => {
    Axios.get(`${this.url}/types`).then(response => {
      this.setState({
        categories: response.data.results
      });
    });
  };

  getAllData = () => {
    let getLocations = Axios.get(`${this.url}/business`);
    let getCategories = Axios.get(`${this.url}/types`);

    Promise.all([getLocations, getCategories]).then(values => {
      let locations = values[0].data.results;
      let categories = values[1].data.results;

      let id = categories[0].id;

      this.setState({
        allLocations: locations,
        filteredLocations: locations.filter(
          elt =>
            id === elt.type_id1 || id === elt.type_id2 || id === elt.type_id3
        ),
        categories,
        selectedId: id
      });
    });
  };

  filterTypes = ({ id }) => {
    let filteredLocations = this.state.allLocations.filter(
      elt => id === elt.type_id1 || id === elt.type_id2 || id === elt.type_id3
    );
    this.setState({
      filteredLocations,
      selectedId: id
    });
  };

  render() {
    let { filteredLocations, categories } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <Nav title2="Check Out the Map" title3="#map" />
        <h2 className="section__title">Island Time</h2>
        <p className="section__subtitle">
          The best of what the triangle has to offer
        </p>
        <p>
          Do you want to experience real Bermudian culture? Go where the locals
          go? Look no further.
        </p>
        <div className="tag-Container">
          {categories.map(elt => {
            let { id, name } = elt;
            return (
              <Tag
                key={id}
                selectedId={this.state.selectedId}
                id={id}
                name={name.toUpperCase()}
                handleClick={this.filterTypes}
              />
            );
          })}
        </div>
        <div id="cards_outer_container">
          <div id="cards_inner_container">
            {filteredLocations.length > 0 &&
              filteredLocations.map(elt => {
                let { avatar, name, url, tips } = elt;
                return (
                  <Card avatar={avatar} name={name} url={url} tips={tips} />
                );
              })}
          </div>
        </div>
        <div id="map" style={{ width: "100vw", height: "100vh" }}>
          <MyMap
            allLocations={this.state.allLocations}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7F5Y4ZgErolSm_DuEhLT7kxp9ZZLMQZ0`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></MyMap>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Carousel;
