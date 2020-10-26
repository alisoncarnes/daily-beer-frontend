import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateBeer from "./components/create-beer.component";
import EditBeer from "./components/edit-beer.component";
import BeerList from "./components/beer-list.component";
import IndexPage from "./components/index.component";
import SearchBeer from "./components/search-beer.component";
import FindBrewery from "./components/find-brewery.component"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Daily Beer</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/beerlist" className="nav-link">Beer List</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Add to Beer List</Link>
              </li>
              <li className="navbar-item">
              <Link to="/search" className="nav-link">Search Beers</Link>
              </li>
              <li className="navbar-item">
              <Link to="/brewery" className="nav-link">Search Breweries</Link>
              </li>
            </ul>
          </div>
          </nav>
          <br/>
          <Route path="/" exact component={IndexPage} />
          <Route path="/beerlist" component={BeerList}/>
          <Route path="/edit/:id" component={EditBeer} />
          <Route path="/create" component={CreateBeer} />
          <Route path="/search" component={SearchBeer}/>
          <Route path ="/brewery" component={FindBrewery}/>

        </div>
      </Router>


    );
  }
}

export default App;
