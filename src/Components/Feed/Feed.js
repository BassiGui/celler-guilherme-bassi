import React from 'react';
import FeedItem from './FeedItem';

const Feed = ({ handleUpdateBeer, handleDeleteBeer, beers }) => {
  return (
    <div>
      {beers.map((beer, index) => {
        return (
          <FeedItem
            key={index}
            value={beer.value}
            onChange={(event) => handleUpdateBeer(event, index)}
            onDelete={() => handleDeleteBeer(index)}
          />
        );
      })}
    </div>
  );
};

export default Feed;
