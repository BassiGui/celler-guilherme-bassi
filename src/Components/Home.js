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

      <div className="Array-preview">
        <pre>{JSON.stringify(beers, null, 4)}</pre>
      </div>
    </section>
  );
};

export default Home;
