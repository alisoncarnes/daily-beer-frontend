import React, { Component } from 'react';
import axios from 'axios';

export default class FindBrewery extends Component{

  state = {
      brewery: []
  }


  findBrewery = (event) => {
      event.preventDefault()
      event.target.reset()

      let collection = []

      axios.get('https://api.openbrewerydb.org/breweries?by_city=' + this.state.city).then(
          (response) => {
            for (let i = 0; i < 10; i++) {
              collection.push(response.data[i]);
            }
            console.log(collection);
              this.setState({
                  brewery: collection
              })
          }
      )

  }

  changeCity = (event) => {
      this.setState({
          city: event.target.value
      })
  }
  render = () => {
      return <div>
          <form onSubmit={this.findBrewery}>
              <input type="text" onKeyUp={this.changeCity} />
              <input type="submit" value="Find Brewery" />
          </form><br/><br/>

          {this.state.brewery.map((oneB)=>{
            return(
            <div className="list" key={oneB.id}>
            <ul>
              <li>
              <p>Name: {oneB.name}</p>
              <p>Brewery Type: {oneB.brewery_type}</p>
              <p>Street: {oneB.street}</p>
              <p>City: {oneB.city}</p>
              <p>State: {oneB.state} </p>
              <p>Website: <a href={oneB.website_url}>Here</a></p>
              </li>
            </ul>
            </div>
          )})}


      </div>;
  }
}
