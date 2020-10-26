import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
  constructor(props){
    super(props);

    this.onChangeBeerName = this.onChangeBeerName.bind(this);
    this.onChangeBrewery = this.onChangeBrewery.bind(this);
    this.onChangeBeerStyle = this.onChangeBeerStyle.bind(this);
    this.onChangeBeerABV = this.onChangeBeerABV.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      id: '',
      beer: '',
      name: '',
      brewery: '',
      style: '',
      abv: ''
    }
  }
  componentDidMount(){
    axios.get('https://dailybeerapp.herokuapp.com/beers/' + this.props.match.params.id)
    .then(res => {
      this.setState({
        id: res.data._id,
        name: res.data.name,
        brewery: res.data.brewery,
        style: res.data.style,
        abv: res.data.abv
      })
    })
    .catch(function(error){
      console.log(error);
    })
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

    const obj = {
      id: this.state._id,
      name: this.state.name,
      brewery: this.state.brewery,
      style: this.state.style,
      abv: this.state.abv
    }

    console.log(`Form submitted:`);
    console.log(`Beer Name: ${this.state.name}`);
    console.log(`Brewery: ${this.state.brewery}`);
    console.log(`Beer Style: ${this.state.style}`);
    console.log(`ABV: ${this.state.abv}`);

    axios.put('https://dailybeerapp.herokuapp.com/beers/' + this.props.match.params.id, obj)
    .then(res=> console.log(res.data))
    .then(res => {
      window.location = '/beerlist'

    })


  }
  deletedBeer = (event) => {
    event.preventDefault();
    axios.delete(`https://dailybeerapp.herokuapp.com/beers/${this.state.id}` )
    .then(res => {
      window.location = '/beerlist'

      })
    }


    render() {
        return (
            <div>
            <h3 align="center">Update Beer</h3>
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
                    <input type="submit" value="Edit Beer" className="btn btn-primary" />
              </div>
            </form>
            <form onSubmit={ this.deletedBeer }>
              <div className="form-group">
                <input type = "submit" value="Delete"/>
              </div>
            </form>
          </div>
        )
    }
}
