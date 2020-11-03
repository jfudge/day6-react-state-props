import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './LikeButton.css';

// Create the re-usable component
const LikeButton = (/*props*/) => {
  // const { text } = props;

  // Setup the state of the like button
  // We are going to use the useState() function

  // destructuring assignment (array style)
  // useState returns an array that has 2 items useState = (initialStateValue) => [initialStateValue, setStateFunction]
  // the useState state function takes one paramter, the initial state value
  // the defaultStateValue is the state
  // the setStateFunction is the function designed to specifically change the state
  const [isLiked, setIsLiked] = useState(false); // This is a react hook
  // setStateFunction:
  //


  console.log('LikeButton state: ', isLiked)

  // Whenever the button is pressed (onClick) we are going to change the state.
  // When the state changes, the JSX will react to the state change by "re-rendering"
  // onClick is bound to a function that will change the state of isLiked to the opposite of it's current value
  // * Note - the ! means "not".

  // You can use template literals to concatenate classes to add some more flare to your state changes
  // Template literals are great because inside a template literal you can write Javascript
  // `string string string ${javascript}`
  return (
    <button type="button" className={`likeButton ${isLiked ? 'liked' : ''}`} onClick={() => setIsLiked(!isLiked)}>
      {isLiked ? (
        <span className="material-icons">favorite</span>
      ) : (
        <span className="material-icons">favorite_border</span>
      )}
      {/* <span className="text">{text}</span> */}
    </button>
  );
};

// LikeButton.propTypes = {
//   text: PropTypes.string,
// }

// LikeButton.defaultProps = {
//   text: '',
// }

export default LikeButton;