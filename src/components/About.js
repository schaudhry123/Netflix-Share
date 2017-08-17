import React from 'react';
import { Jumbotron } from 'reactstrap';

require('../styles/About.css');

export default class About extends React.Component {

  render() {
    return (
      <div className="about-component">
        <Jumbotron>
          <h1 className="display-3">About</h1>
          <p className="lead">
            Netflix Share was built to solve one simple problem: watching TV shows with
            friends remotely. I built this as a side project to help with my long distance
            relationship too (and to play around React and building a web app).
          </p>
          <hr className="my-2" />
          <p className="lead">
            <a href="http://github.com/schaudhry123">github.com/schaudhry123</a>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

// Uncomment properties you need
// About.propTypes = {};
// About.defaultProps = {};