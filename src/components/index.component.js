import React, { Component } from 'react';
import axios from 'axios';

export default class TodosList extends Component {
    render() {
        return ( <div>
            <div className="row">
                <div className="col">

                  <div className="icon">
                    <img className="beer-icon" src="https://i.ibb.co/YDsR8Gq/kisspng-beer-oktoberfest-computer-icons-alcoholic-drink-cl-oktoberfest-5ac072f546e768-40786661152256.png"/><br/>
                    <p><h2>About the Site</h2></p>
                    <p>Welcome to Daily Beer! With this app you can keep track of beers you enjoy, find breweries you may want to try when visiting a new city, or discover new beers you may have not known about! </p>
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

            <div className="suggestions">
              <h2>Beer's of the Week</h2>
            </div>

          </div>
        )
    }
}
