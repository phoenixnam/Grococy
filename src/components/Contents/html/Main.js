import React, { useState } from 'react';
import Login from './login';
import Header from '../../Header/Header';

function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogout = () => {
    setLoggedIn(false);
  }
  return (
    <>
      <Login handleLogout={handleLogout} />
      <Header handleLogout={handleLogout} />
    </>
  );
}

export default Main;