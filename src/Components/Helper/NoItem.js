import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Forms/Button';
import styles from './NoItem.module.css';

const NoItem = ({ text, createBeer }) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.NoItem} animeLeft`}>
      <h2 className={styles.text}>{text}</h2>
      {createBeer && (
        <Button
          style={{ background: 'white', border: 'white', color: '#333' }}
          onClick={() => navigate('/add-new-beer')}
        >
          Create
        </Button>
      )}
    </div>
  );
};

export default NoItem;
