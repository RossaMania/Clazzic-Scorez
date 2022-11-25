import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>This is the home page!</h1>
      <Link to="/games">Go to games!</Link>
    </>
  );
};

export default Home;