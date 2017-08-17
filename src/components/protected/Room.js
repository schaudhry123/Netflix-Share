import React, { Component } from 'react'

import MagicBar from '../MagicBar';

require('../../styles/Room.css');

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false, tv: '' };

    this.toggleTV = this.toggleTV.bind(this);
  }

  toggleTV() {
    var active = this.state.active;
    if (!active) {
      var TV = (
        <div className="tv-box">
          <iframe className="tv" src="https://www.netflix.com" />
        </div>
      );

      this.setState({ active: true, tv: TV });
    }
  }

  render() {

    return (
      <div className="room-component">
        <span>Welcome to your room. This is a protected route. You can only see this if you're authed.</span>
        <div className="collapseHeader" onClick={this.props.toggleCollapse}>Collapse Header</div>
        { this.state.tv }
        <MagicBar startTV={this.toggleTV} />
      </div>
    )
  }
}