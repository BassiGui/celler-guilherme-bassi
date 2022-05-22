import React from 'react';
import NoItem from '../Helper/NoItem';
import FeedItem from './FeedItem';
import styles from './Feed.module.css';
import axios from 'axios';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const Feed = () => {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const [sortByNameAsc, setSortByNameAsc] = React.useState(false);
  const [sortByNameDesc, setSortByNameDesc] = React.useState(false);

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

  function handleSearch({ target }) {
    setFilter(target.value);
  }

  function handleOrderByNameAsc() {
    setSortByNameDesc(false);
    setSortByNameAsc(true);
  }

  function handleOrderByNameDesc() {
    setSortByNameAsc(false);
    setSortByNameDesc(true);
  }

  return (
    <>
      <h1 className="title">List of beers</h1>
      {data.length > 0 && (
        <div className={styles.feedHeader}>
          <div>
            <Input
              type="text"
              value={filter}
              placeholder="make your search by name"
              label="Search by name"
              onChange={handleSearch}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p className={styles.sortText}>Sort by:</p>
            <div className={styles.sort}>
              <Button secondColor={true} onClick={handleOrderByNameAsc}>
                Ascending name
              </Button>
              <Button secondColor={true} onClick={handleOrderByNameDesc}>
                Descending name
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className={`${data.length === 0 ? '' : styles.grid}`}>
        {data.length === 0 ? (
          <NoItem
            text="Your celler doesn't have any beer, please create a new one"
            createBeer={true}
          />
        ) : filter ? (
          data
            .filter((beer) => beer.newBeer.includes(filter))
            .map((beer) => {
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
        ) : sortByNameAsc ? (
          data
            .sort((a, b) => {
              //ordem crescente
              return a.newBeer.toLowerCase() > b.newBeer.toLowerCase() ? 1 : -1;
            })
            .map((beer) => {
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
        ) : sortByNameDesc ? (
          data
            .sort((a, b) => {
              //ordem decrescente
              return a.newBeer.toLowerCase() > b.newBeer.toLowerCase() ? -1 : 1;
            })
            .map((beer) => {
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
        ) : (
          data.map((beer) => {
            return (
              <FeedItem
                key={beer.id}
                beerName={beer.newBeer}
                image={beer.file}
                liters={beer.liters}
                date={beer.date}
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
