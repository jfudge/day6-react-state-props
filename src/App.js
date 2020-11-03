import React from 'react';
import './App.css';

// Import my components
import Header from './components/Header';
import LikeButton from './components/LikeButton/LikeButton';
import StarButton from './components/StarButton/StarButton';

function App() {

  // You can pass data into components the same way you do HTML attributes,
  //  but instead of "", you use {} for JSX
  const title = 'My Portfolio';

  const menu = [
    {
      href: 'https://google.ca',
      title: 'Google',
    },
    {
      href: 'https://amazon.ca',
      title: 'Amazon'
    },
    {
      href: 'https://tesla.com',
      title: 'Tesla'
    },
  ];

  return (
    <div>
      <Header title={title} menu={menu} />
      <p>Hello World!</p>
      <LikeButton />
      <StarButton />
    </div>
  );
}

export default App;
