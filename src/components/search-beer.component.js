import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBeer extends Component{
  state = {
      beer: []
  }


  findBeer = (event) => {
      event.preventDefault()
      event.target.reset()

      let beerCollection = []

      axios.get('https://api.punkapi.com/v2/beers?page=2&abv_lt=' + this.state.abv).then(
          (response) => {
            for(let i=0; i < 10; i++){
              beerCollection.push(response.data[i])
            }
            console.log(beerCollection);
              this.setState({
                  beer: beerCollection
              })
            }
        )

    }

  changeBeer = (event) => {
      this.setState({
          abv: event.target.value
      })
  }
  render = () => {
      return <div>
          <form onSubmit={this.findBeer}>
              <input type="number" onKeyUp={this.changeBeer} />
              <input type="submit" value="Find Beer" />
          </form><br/><br/>

          {this.state.beer.map((beerList)=>{
            return(
              <div className="beer-list" key={beerList.id}>
              <ul>
                <li>
                  <p><img src={beerList.image_url}/></p>
                  <p>Name: {beerList.name}</p>
                  <p>Type: {beerList.tagline}</p>
                  <p>Description: {beerList.description}</p>
                  <p>ABV: {beerList.abv}</p>
                  <p>Food Pairing: {beerList.food_pairing} </p>
                </li>
              </ul>
              </div>
        )})}




      </div>;
  }
  }
