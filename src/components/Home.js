import React, { Component } from 'react'
import { Link } from 'react-router-dom';

let NetflixBanner = require('../images/netflix-family.jpg');
require('../styles/Home.css');

export default class Home extends Component {

  render () {
    
    var bannerText;
    if (this.props.authed) {
      bannerText = 'Go to my room!';
    } else {
      bannerText = 'Try it!';
    }

    return (
      <div className="view-component">
        <div className="container">
          <div className="banner">
            <img src={NetflixBanner} alt="Netflix with friends" />
            <span className="slogan">Watch anything with your friends, anywhere.</span>

            <Link to='/room'>
              <div className="try-button">{bannerText}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}