import React, { Component } from 'react';
import axios from 'axios';

export default class IndexPage extends Component {
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
              <div className="row">
                <div className="col">
                  <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/1MKh9ms/Tree-House-Logo-Primary-Horizontal-Black-01.jpg" style={{marginTop: '40px'}}/>
                  <div className="card-body">
                    <h5 className="card-title"><br/><br/>Double Shot</h5>
                    <p className="card-text" style={{marginTop: '20px'}}>
                    <b>Brewery:</b> Tree House Brewing Co <br/>
                    <b>BA Score:</b> 100<br/>
                    <b>ABV:</b> 7.6%
                    </p><br/>
                    <a href="https://www.beermenus.com/beers/93972-tree-house-double-shot" >Shop</a>

                  </div>
                </div>
              </div>



                <div className="col">
                  <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/3RkcSkY/Toppling-Goliath-KBBS-2019-Feature.jpg"/>
                  <div className="card-body">
                    <h5 className="card-title">Kentucky Brunch Brand Stout</h5>
                    <p className="card-text">
                    <b>Brewery:</b> Toppling Goliath Brewing Company <br/>
                    <b>BA Score:</b> 100<br/>
                    <b>ABV:</b> 12%
                    </p>
                    <a href="https://www.beermenus.com/beers/139632-kentucky-brunch-brand-stout">Shop</a>

                  </div>
                </div>
              </div>

                <div className="col">
                  <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/3vy6vXk/Samuel-Smith-Brewery-logo-svg.png" style={{marginTop: '20px'}}/>
                  <div className="card-body"    style={{marginTop: '40px'}}>
                    <h5 className="card-title">Organic Chocolate Stout</h5>
                    <p className="card-text" style={{marginTop: '40px'}}>
                    <b>Brewery:</b>Samuel Smith Old Brewery<br/>
                    <b>BA Score:</b> 95<br/>
                    <b>ABV:</b> 5%
                    </p>
                    <a href="https://www.beermenus.com/beers/22453-samuel-smith-s-organic-chocolate-stout">Shop</a>

                  </div>
                </div>
              </div>
            </div>

              <h3>ipa</h3>

              <div className="row">
                <div className="col">
                  <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.ibb.co/F4phTgk/5293448-alpinebeerco.jpg" />
                  <div className="card-body" style={{marginTop: '5px'}} >
                    <h5 className="card-title">Nelson</h5>
                    <p className="card-text"  >
                    <b>Brewery:</b> Alpine Beer Company<br/>
                    <b>BA Score:</b> 99<br/>
                    <b>ABV:</b> 7%
                    </p>
                    <a href="https://www.beermenus.com/beers/9644-alpine-beer-company-nelson" >Shop</a>

                  </div>
                </div>
              </div>

                  <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                      <img src="https://i.ibb.co/t2H38xM/bazziergraphik-113.jpg" style={{marginTop: '40px'}} />
                    <div className="card-body">
                      <h5 className="card-title"style={{marginTop: '10px'}}>Citra Bitter Monk</h5>
                      <p className="card-text"style={{marginTop: '5px'}} >
                      <b>Brewery:</b> Anchorage Brewing Company<br/>
                      <b>BA Score:</b> 96<br/>
                      <b>ABV:</b> 9%
                      </p>
                      <a href="https://www.beermenus.com/beers/358010-anchorage-bitter-monk-citra-dry-hopped">Shop</a>

                    </div>
                  </div>
                </div>

                  <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                      <img src="https://i.ibb.co/V2z5bCb/bpbc-webheader-lg.jpg" style={{marginTop: '50px'}} />
                    <div className="card-body" style={{marginTop: '20px'}}>
                      <h5 className="card-title">Barrel Aged Double Shot Double Black</h5>
                      <p className="card-text" >
                      <b>Brewery:</b> Bent Paddle Brewing Co.<br/>
                      <b>BA Score:</b> 98<br/>
                      <b>ABV:</b> 11.2%
                      </p>
                      <a href="https://www.beermenus.com/">Shop</a>

                    </div>
                  </div>
                </div>

            </div>

        </div>
      </div>

        )
    }
}
