import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './FeedItem.module.css';
const FeedItem = ({ value, onChange, onDelete }) => {
  return (
    <div className={`${styles.feedItem} animeLeft`}>
      <Input value={value} onChange={onChange} />
      <Button onClick={onDelete}>Remove</Button>
    </div>
  );
};

export default FeedItem;
