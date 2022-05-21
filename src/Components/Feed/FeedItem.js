import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import styles from './FeedItem.module.css';
const FeedItem = ({ beerName, onDelete, image, liters, onUpdate }) => {
  const [details, setDetails] = React.useState(false);

  function handleClick() {
    setDetails(true);
  }

  return (
    <div className={`${styles.feedItem} animeLeft`} onClick={handleClick}>
      <img src={image} alt={beerName} />
      {details ? (
        <div className={styles.body}>
          <h2>{beerName}</h2>
          <p>{liters} Liters</p>
          <div className={styles.buttons}>
            <Button onClick={onDelete}>Remove</Button>
            <Link to="/update-beer">
              <Button onClick={onUpdate} secondColor={true}>
                Update
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.moreDetails}>
          <h2>{beerName}</h2>
          <p>Click here for more details</p>
        </div>
      )}
    </div>
  );
};

export default FeedItem;
