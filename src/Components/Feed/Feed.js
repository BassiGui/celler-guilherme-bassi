import React from 'react';
import NoItem from '../Helper/NoItem';
import FeedItem from './FeedItem';
import styles from './Feed.module.css';
import axios from 'axios';

const Feed = ({ handleUpdateBeer, handleDeleteBeer, beers }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://62881afb10e93797c156a03a.mockapi.io/beers`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <>
      <h1 className="title">List of beers</h1>
      <div className={`${beers.length === 0 ? '' : styles.grid}`}>
        {/* {beers.length === 0 ? (
          <NoItem
            text="Your celler doesn't have any beer, please create a new one"
            createBeer={true}
          />
        ) : (
          beers.map((beer, index) => {
            return (
              <FeedItem
                key={index}
                value={beer.value}
                image={beer.img}
                liters={beer.liters}
                onChange={(event) => handleUpdateBeer(event, index)}
                onDelete={() => handleDeleteBeer(index)}
              />
            );
          })
        )} */}
        {data.map((beer, index) => {
          return (
            <div key={beer.id}>
              <h2>{beer.newBeer}</h2>
              <p>{beer.liters} liters</p>
              <img src={beer.file} alt={beer.newBeer} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feed;
