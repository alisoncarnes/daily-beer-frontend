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
            for(let i=0; i < 12; i++){
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

      <div className="row">
          <div className="col">

            <div className="icon">
              <img className="beer-icon" src="https://i.ibb.co/YDsR8Gq/kisspng-beer-oktoberfest-computer-icons-alcoholic-drink-cl-oktoberfest-5ac072f546e768-40786661152256.png"/><br/>
              <p><h2>What to Do</h2></p>
              <p>On this page you can search for beers based on ABV(alchohol by volumne). All you need to do is type in a number into the search and you'll receive ten beers lower than that value.</p>
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

      <h3 className="add">search beers</h3>


          <form onSubmit={this.findBeer}>
              <input type="text" onKeyUp={this.changeBeer} style={{width:"100%", padding:"10px", textAlign: "center", fontSize: "20px"}} placeholder="example: 6" /><br/><br/>
              <input type="submit" value="Find Beer" style={{width:"100%"}} className="btn btn-outline-secondary"/>
          </form><br/><br/>

        <div className="row">
          {this.state.beer.map((beerList)=>{
            return(

                <div className="col" style={{float: "left"}}>
                  <div className="card" style={{width: "18rem"}} key={beerList.id}>
                  <div style={{textAlign: "center"}}>
                    <img src={beerList.image_url} style={{width:"150px", height:"350px", padding: "10px"}}/>
                  </div>
                    <div className="card-body">
                      <h5 className="card-title">Name: {beerList.name}</h5>
                      <p className="card-text">
                        <b>Type:</b> {beerList.tagline} <br/>
                        <b>Description:</b> {beerList.description} <br/>
                        <b>ABV:</b> {beerList.abv} <br/>
                        <b>Food Pairing:</b> {beerList.food_pairing[0]}
                      </p>
                    </div>
                  </div>
                </div>

              )})}
          </div>



      </div>;
  }
  }
