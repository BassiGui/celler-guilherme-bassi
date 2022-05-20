import React from 'react';
import Feed from './Feed/Feed';

const Home = ({ handleUpdateBeer, handleDeleteBeer, beers }) => {
  return (
    <section className="container mainContainer">
      <Feed
        handleUpdateBeer={handleUpdateBeer}
        handleDeleteBeer={handleDeleteBeer}
        beers={beers}
      />
    </section>
  );
};

export default Home;
