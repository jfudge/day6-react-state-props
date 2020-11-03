import React from 'react';
import PropTypes from 'prop-types';

// This is a function component
// Props are the function parameters
// props is not a keyword, it is a React naming convention.
// Technically, you can call props whatever you want, but you shouldn't
const Header = (props) => {

  // Extract your prop data
  // Destructuring assignment
  console.log(props);
  const { title, menu } = props;

  // This is the same thing as the above destructuring assignment
  // const title = props.title;
  // const menu = props.menu;

  // When I map through the menu, I am creating a variety of html items.
  // When this happens, make sure to include a key prop for each iteration
  // that is unique, but NOT the index value of the iteration.
  // https://reactjs.org/docs/lists-and-keys.html#keys
  return (
    <header>
      <h1>{title}</h1>
      <ul>
        {menu.map((menuItem) => {
          return (
            <li key={menuItem.title}>
              <a href={menuItem.href} target="_blank" rel="noreferrer">{menuItem.title}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

// Define the proptypes that your component can use.
Header.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  )
};

// You can also set default props
// for whenever the prop is not defined.
Header.defaultProps = {
  title: 'Default Title',
  menu: [],
}

export default Header;
