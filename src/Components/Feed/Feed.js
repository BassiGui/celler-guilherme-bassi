import React from 'react';
import NoItem from '../Helper/NoItem';
import FeedItem from './FeedItem';
import styles from './Feed.module.css';
import axios from 'axios';

const Feed = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://62881afb10e93797c156a03a.mockapi.io/beers')
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleUpdate(data) {
    let { id, newBeer, file, liters } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Beer', newBeer);
    localStorage.setItem('Image', file);
    localStorage.setItem('Liters', liters);
  }

  function handleGetData() {
    axios
      .get('https://62881afb10e93797c156a03a.mockapi.io/beers')
      .then((reponse) => {
        setData(reponse.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleDelete(id, nome) {
    const confirmation = window.confirm(`Do you want to delete ${nome} beer?`);
    if (confirmation) {
      axios
        .delete(`https://62881afb10e93797c156a03a.mockapi.io/beers/${id}`)
        .then(() => {
          handleGetData();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <>
      <h1 className="title">List of beers</h1>
      <div className={`${data.length === 0 ? '' : styles.grid}`}>
        {data.length === 0 ? (
          <NoItem
            text="Your celler doesn't have any beer, please create a new one"
            createBeer={true}
          />
        ) : (
          data.map((beer) => {
            return (
              <FeedItem
                key={beer.id}
                beerName={beer.newBeer}
                image={beer.file}
                liters={beer.liters}
                onDelete={() => handleDelete(beer.id, beer.newBeer)}
                onUpdate={() => handleUpdate(beer)}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Feed;
