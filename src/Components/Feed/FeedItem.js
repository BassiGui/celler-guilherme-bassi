import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './FeedItem.module.css';
const FeedItem = ({ value, onChange, onDelete, image, liters }) => {
  const [details, setDetails] = React.useState(false);
  const [update, setupdate] = React.useState(false);
  function handleClick() {
    setDetails(true);
  }
  function handleUpdate() {
    setupdate(true);
  }
  function handleConfirm() {
    setupdate(false);
  }
  return (
    <div className={`${styles.feedItem} animeLeft`} onClick={handleClick}>
      <img src={image} alt={value} />
      {details && (
        <div className={styles.body}>
          {update ? (
            <div className={styles.update}>
              <Input value={value} onChange={onChange} />
              <Button onClick={handleConfirm}>confirmar</Button>
            </div>
          ) : (
            <h2>{value}</h2>
          )}
          <p>{liters} Liters</p>
          <div className={styles.buttons}>
            <Button onClick={onDelete}>Remove</Button>
            <Button onClick={handleUpdate} secondColor={true}>
              Update
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedItem;
