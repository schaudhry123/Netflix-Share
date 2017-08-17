import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../helpers/auth'

require('../styles/HeaderLink.css');

class HeaderLinkComponent extends React.Component {
  render() {
    var navLink;
    if (this.props.type === 'login' && this.props.authed) {
      navLink = (
        <div className={'nav-item ' + this.props.type}>
          <span className="text" onClick={() => { logout() }}>Logout</span>
        </div>
      );
    } else {
      let secondaryStyle = 'hide';
      let secondaryHref = '';
      if (this.props.secondary) {
        secondaryStyle = 'secondary';
        secondaryHref = this.props.secondaryHref;
      }
      let divider = <span className={secondaryStyle + ' divider'}> / </span>
  
      navLink = (
        <div className={'nav-item ' + this.props.type}>
          <Link to={this.props.href}>
            <span className="text">{this.props.text}</span>
          </Link>
          {divider}
          <Link to={secondaryHref}>
            <span className={secondaryStyle}>{this.props.secondary}</span>
          </Link>
        </div>
      );
    }

    return navLink;
  }
}

HeaderLinkComponent.displayName = 'HeaderLinkComponent';

// Uncomment properties you need
// HeaderLinkComponent.propTypes = {};
// HeaderLinkComponent.defaultProps = {};

export default HeaderLinkComponent;
