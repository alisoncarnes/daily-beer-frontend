import React, { Component } from 'react';
import axios from 'axios';

export default class TodosList extends Component {
    render() {
        return ( <div>
            <div className="row">
                <div className="col">

                  <div className="icon">
                    <img className="beer-icon" src="https://i.ibb.co/YDsR8Gq/kisspng-beer-oktoberfest-computer-icons-alcoholic-drink-cl-oktoberfest-5ac072f546e768-40786661152256.png"/><br/>
                    <p><h2>About Site</h2></p>
                    <p>Welcome to Daily Beer! With this app you can keep track of beers you enjoy, find breweries you may want to try when visiting a new city, or discover new beers you may have not known about! </p>
                  </div>


                </div>
                <div className="col">
                <div className="icon">
                  <img className="beer-icon" src="https://i.ibb.co/QHF6DJs/beerkegs.png"/>
                  <p>Text Here</p>
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
