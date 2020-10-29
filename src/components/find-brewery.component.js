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

      <div className="row">
          <div className="col">

            <div className="icon">
              <img className="beer-icon" src="https://i.ibb.co/YDsR8Gq/kisspng-beer-oktoberfest-computer-icons-alcoholic-drink-cl-oktoberfest-5ac072f546e768-40786661152256.png"/><br/>
              <p><h2>What to Do</h2></p>
              <p>Planning am out-of-state trip or exploring a city nearby? Here you can type in the city and get a list of breweries you can try while you're there!</p>
            </div>


          </div>
          <div className="col">
          <div className="icon">
            <img className="beer-icon" src="https://i.ibb.co/QHF6DJs/beerkegs.png"/>
            <p><h2>Explore</h2></p>
            <div class="buttons">
              <form action="https://dailybeer.herokuapp.com/beerlist">
                <button type="submit" class="btn btn-outline-secondary">Your Beer List</button>
              </form>
              <div className="divider"/>
              <form action="https://dailybeer.herokuapp.com/search">
                  <button type="submit" class="btn btn-outline-secondary">Discover Beers</button>
              </form>
              <div className="divider"/>
              <form action="https://dailybeer.herokuapp.com/brewery">
                  <button type="submit" class="btn btn-outline-secondary">Find a Brewery</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h3 className="add">find a brewery</h3>

          <form onSubmit={this.findBrewery}>
              <input type="text" onKeyUp={this.changeCity} style={{width:"100%", padding:"10px", textAlign: "center", fontSize: "20px"}} placeholder="example: san diego" />
              <br/><br/>
              <input type="submit" value="Find Brewery" style={{width:"100%"}} className="btn btn-outline-secondary" />
          </form><br/><br/>

        <div className="row">
          {this.state.brewery.map((oneB)=>{
            return(
          <div className="col">
            <div className="card" style={{width:"25rem"}}  key={oneB.id}>

              <div className="card-header" style={{backgroundColor: "#F4A176", color: "whitesmoke", textTransform: "uppercase", fontSize:"20px", fontFamily:"'Teko', sans-serif"}}>Name: {oneB.name}</div>
                <ul className="list group list-group-flush" style={{marginLeft: "-35px"}}>
                  <li class="list-group-item" >Brewery Type: {oneB.brewery_type}</li>
                  <li class="list-group-item">Street: {oneB.street}</li>
                  <li class="list-group-item">City: {oneB.city}</li>
                  <li class="list-group-item">State: {oneB.state} </li>
                  <li class="list-group-item">Website: <a href={oneB.website_url}>Here</a></li>
                </ul>
            </div>
          </div>
          )})}
        </div>

      </div>;
  }
}
