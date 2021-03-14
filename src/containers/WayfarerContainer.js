import React, { Component } from 'react';
import CitiesList from '../components/city/CitiesList';
import CityPage from '../pages/CityPage';
import NavbarWayfarer from '../components/navbar/NavbarWayfarer';

const URL = 'https://project-4-react-side-wayferer.herokuapp.com//cities';

class WayfarerContainer extends Component {
  state = {
    cities: [],
    city: 0,
  };

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cities: json,
        });
      })
      .catch((err) => console.log(err));
  }

  updateCity = (index) => {
    this.setState({
      city: index,
    });
  };

  handleChange = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cities: json,
        });
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    fetch(`https://project-4-react-side-wayferer.herokuapp.com//posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => console.log(response))
      .then((jsonData) => {
        console.log(jsonData);
        this.handleChange();
      });
  };

  render() {
    return (
      <div>
        <div className='container wayfarerContainer'>
          <NavbarWayfarer />
          <div className='row' id='wayfarerContainer'>
            <h2>Cities</h2>
            <div id='wayfarerLeft' className='col-4'>
              <CitiesList
                cities={this.state.cities}
                updateCity={this.updateCity}
              />
            </div>
            <div id='wayfarerRight' className='col-8'>
              <CityPage
                city={this.state.cities[this.state.city]}
                deletePost={this.handleDelete}
                update={this.handleChange}
              />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default WayfarerContainer;
