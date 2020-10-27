import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Beer = props => (
  <tr>
    <td>{props.beerapp.name}</td>
    <td>{props.beerapp.brewery}</td>
    <td>{props.beerapp.style}</td>
    <td>{props.beerapp.abv}</td>
    <td>
      <Link to={"/edit/" + props.beerapp._id}>Edit</Link>
    </td>
  </tr>
)

export default class TodosList extends Component {

  constructor(props) {
    super(props);
    this.state = { beers: [] }
    }

    componentDidMount() {
      axios.get('https://dailybeerapp.herokuapp.com/beers/')
      .then(res => {
        this.setState({
          beers: res.data,
          id: null,
          name: '',
          brewery: '',
          style: '',
          abv: ''
         });
      })
        .catch(function(error){
          console.log(error);
        })
    }

    beerList() {
      return this.state.beers.map(function(currentBeer, i){
        return <Beer beerapp={currentBeer} key = {i} />;
      })
    }

    render() {
        return (
            <div>
                <h3>Your Beer List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brewery</th>
                    <th>Beer Style</th>
                    <th>ABV</th>
                  </tr>
                </thead>
                <tbody>
                      {this.beerList()}
                </tbody>
              </table>
              <form action="https://dailybeer.herokuapp.com/create">
                  <button type="submit" class="btn btn-outline-secondary">Add a Beer</button>
              </form>

            </div>
        )
    }
}
