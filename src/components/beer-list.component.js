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

            <div className="row">
                <div className="col">

                  <div className="icon">
                    <img className="beer-icon" src="https://i.ibb.co/YDsR8Gq/kisspng-beer-oktoberfest-computer-icons-alcoholic-drink-cl-oktoberfest-5ac072f546e768-40786661152256.png"/><br/>
                    <p><h2>What to Do</h2></p>
                    <p>On this page you can add, edit and delete beers that you either want to try or beers that you have enjoyed and want to keep track of.</p>
                  </div>


                </div>
                <div className="col">
                <div className="icon">
                  <img className="beer-icon" src="https://i.ibb.co/QHF6DJs/beerkegs.png"/>
                  <p><h2>Get Started</h2></p>
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
                <h3 class="add">Your Beer List</h3>

                <table className="table table-hover" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Brewery</th>
                    <th scope="col">Beer Style</th>
                    <th scope="col">ABV</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>
                      {this.beerList()}
                </tbody>
              </table>
              <form action="https://dailybeer.herokuapp.com/create">
                  <button type="submit" class="btn btn-outline-secondary" style={{width: "100%"}}>Add a Beer</button>
              </form>

              <br/><br/><br/>
            </div>
        )
    }
}
