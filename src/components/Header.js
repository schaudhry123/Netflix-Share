import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';

let NetflixShareIcon = require('../images/netflix-share-icon.png');

require('../styles/Header.css');

class Header extends React.Component {

  render() {

    if (this.props.collapse) {
      return (<div></div>);
    } else {
      return (
        <div className="header-component">
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">
                  <img src={NetflixShareIcon} className="header-icon" alt="Netflix Share" />
                  <span className="header-text">{' Netflix Share'}</span>
                </Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <HeaderLink text="About" href="/about" authed={this.props.authed} />
                <HeaderLink text="My room" href="/room" type="button" authed={this.props.authed} />
                <HeaderLink text="Login" type="login" href='/login' secondary="Sign Up" secondaryHref='/register' authed={this.props.authed} />

                {/* {this.props.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>} */}
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
