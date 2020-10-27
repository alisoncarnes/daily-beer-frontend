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
              <h2>top rated beers</h2>
              <p>Here's a list of beers rated on <a href="https://www.beeradvocate.com/">Beer Advocate</a> you might want to try.</p>
            </div>

            <div className="beer-suggestions">
              <h3>porter</h3>
                <div className="row">
                  <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                      <img src="https://www.americancraftbeer.com/wp-content/uploads/2016/02/20140904103646_Hill-Farmstead-Logo.png" className="card-img-top" style={{marginTop: '10px'}}/>
                      <div className="card-body">
                      <h5 className="card-title">Everett Porter</h5>
                    <p className="card-text">
                      <b>Brewery:</b> Hill Farmstead Brewery <br/>
                      <b>BA Score:</b> 100<br/>
                      <b>ABV:</b> 7.5%
                    </p>
                      <a href="https://www.beermenus.com/beers/10068-hill-farmstead-everett?user_type_survey=1" class="btn btn-pirmary" style={{marginTop: '40px'}}>Shop</a>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                      <img src="https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/746046303.jab-logo-print-2color-pms3435-pms375.jpg" className="card-img-top" style={{marginTop: '10px'}}/>
                      <div className="card-body">
                      <h5 className="card-title">Barrel-Aged Framinghammer</h5>
                      <p className="card-text">
                        <b>Brewery:</b> Jack's Abby Brewing <br/>
                        <b>BA Score:</b> 97<br/>
                        <b>ABV:</b> 10%
                      </p>
                      <a href="https://www.beermenus.com/beers/99463-jack-s-abby-cocoa-nut-barrel-aged-framinghammer" class="btn btn-pirmary" style={{marginTop: '10px'}}>Shop</a>

                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                      <img src="https://i.ibb.co/ySv0xLg/fullers-brewery.png"/>
                      <div className="card-body">
                      <h5 className="card-title">London Porter</h5>
                      <p className="card-text">
                        <b>Brewery:</b> Fuller's <br/>
                        <b>BA Score:</b> 94<br/>
                        <b>ABV:</b> 5.4%
                      </p>
                      <a href="https://www.beermenus.com/beers/386328-fuller-s-london-porter">Shop</a>

                      </div>
                    </div>
                  </div>



                </div>




              <h3>stout</h3>

              <h3>ipa</h3>

              <h3>pale ale</h3>

              <h3>sour</h3>
            </div>

          </div>
        )
    }
}
