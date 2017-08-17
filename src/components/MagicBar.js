import React from 'react';

let movieIcon = require('../images/movie-icon.png');

require('../styles/MagicBar.css');

class MagicBar extends React.Component {
  render() {
    return (
      <div className="magicbar-component">
        <img className="movie-icon" src={movieIcon} alt="Movie time!" onClick={this.props.startTV} />
      </div>
    );
  }
}

MagicBar.displayName = 'MagicBar';

// Uncomment properties you need
// MagicBar.propTypes = {};
// MagicBar.defaultProps = {};

export default MagicBar;
