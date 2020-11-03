import React from 'react';
import PropTypes from 'prop-types';

import './StarButton.css';

// We can create components using Classes
class StarButton extends React.Component {

  // Remember that the constructor runs whenever the StarButton is instantiated
  constructor() {
    super();
    // initialize the state object
    this.state = {
      isStarred: false,
    }

    // Everytime you create a class method, it is not automatically bound to the "this" keyword
    // You need to bind it manually.
    this.toggleStar = this.toggleStar.bind(this);
  }

  // Create a method that will be used by the button
  toggleStar() {
    const { isStarred } = this.state;
    // To set the state of isStarred, there is the universal setState() function
    // The setState() function is a staple of Class components. Universally used.
    // setState() takes an argument that is an object that will indicate a state update.
    // setState() will take the new object and append it to the existing object and make
    // the necessary updates
    this.setState({
      isStarred: !isStarred,
    });
  }

  // All components need to return JSX. Class components need to use
  // the pre-defined render method to return JSX
  render() {
    // destructuring assignment to grab the state from StarButton
    const { isStarred } = this.state;

    // We want to use this.toggleStar method in order to update the state and re-render the button
    return (
      <button type="button" className={`starButton ${isStarred ? 'starred' : ''}`} onClick={this.toggleStar}>
        {isStarred ? (
          <span className="material-icons">star</span>
        ) : (
          <span className="material-icons">star_border</span>
        )}
      </button>
    );
  }
}

export default StarButton;