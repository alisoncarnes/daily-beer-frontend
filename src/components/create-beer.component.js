import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBeer extends Component {
    constructor(props){
      super(props);

      this.onChangeBeerName = this.onChangeBeerName.bind(this);
      this.onChangeBrewery = this.onChangeBrewery.bind(this);
      this.onChangeBeerStyle = this.onChangeBeerStyle.bind(this);
      this.onChangeBeerABV = this.onChangeBeerABV.bind(this);
      this.onSubmit = this.onSubmit.bind(this);


      this.state={
        name: '',
        brewery: '',
        style: '',
        abv: ''
      }
    }

    onChangeBeerName = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    onChangeBrewery = (event) => {
      this.setState({
        brewery: event.target.value
      })
    }

    onChangeBeerStyle = (event) => {
      this.setState({
        style: event.target.value
      })
    }

    onChangeBeerABV = (event) => {
      this.setState({
        abv: event.target.value
      })
    }

    onSubmit = (event) => {
      event.preventDefault();

      console.log(`Form submitted:`);
      console.log(`Beer Name: ${this.state.name}`);
      console.log(`Brewery: ${this.state.brewery}`);
      console.log(`Beer Style: ${this.state.style}`);
      console.log(`ABV: ${this.state.abv}`);

      const createdBeer = {
        name: this.state.name,
        brewery: this.state.brewery,
        style: this.state.style,
        abv: this.state.abv
      }
      axios
        .post('https://dailybeerapp.herokuapp.com/beers/add', createdBeer)
        .then((res) =>
        window.location = '/beerlist'
    )
  }

    render() {
        return (<div>

          <form action="https://dailybeer.herokuapp.com/beerlist">
            <button type="submit" class="btn btn-outline-secondary"><ion-icon name="arrow-back-outline"></ion-icon> Go Back to Beer List</button>
          </form>

            <div style={{marginTop: 10}}>
                <h3 className="add">Add a Beer</h3>
                <form onSubmit = {this.onSubmit}>
                  <div className="form-group">
                  <label>Beer Name:</label>
                  <input type="text"
                          className="form-control"
                          value={this.state.name}
                          onChange={this.onChangeBeerName}
                          />
                  </div>
                  <div className="form-group">
                  <label>Brewery:</label>
                  <input type="text"
                          className="form-control"
                          value={this.state.brewery}
                          onChange={this.onChangeBrewery}
                          />
                  </div>
                  <div className="form-group">
                  <label>Beer Style:</label>
                  <input type="text"
                          className="form-control"
                          value={this.state.style}
                          onChange={this.onChangeBeerStyle}
                          />
                  </div>
                  <div className="form-group">
                  <label>ABV:</label>
                  <input type="text"
                          className="form-control"
                          value={this.state.abv}
                          onChange={this.onChangeBeerABV}
                          />
                  </div>
                  <div className="form-group">
                        <input type="submit" value="Add Beer" className="btn btn-outline-secondary" style={{width: "100%"}} />
                    </div>
                </form>
            </div>
          </div>
        )
    }
}
