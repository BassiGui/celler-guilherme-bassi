import React from 'react';
import styles from './BeerUpdateForm.module.css';
import axios from 'axios';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { useNavigate } from 'react-router-dom';

const BeerUpdateForm = () => {
  const [newBeer, setNewBeer] = React.useState('');
  const [file, setFile] = React.useState();
  const [liters, setLiters] = React.useState(0);
  const [id, setId] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setId(localStorage.getItem('ID'));
    setNewBeer(localStorage.getItem('Beer'));
    setFile(localStorage.getItem('Image'));
    setLiters(localStorage.getItem('Liters'));
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put(`https://62881afb10e93797c156a03a.mockapi.io/beers/${id}`, {
        newBeer,
        file,
        liters,
      })
      .then(() => {
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className={`${styles.updateBeer} container mainContainer`}>
      <form className={`${styles.forms} animeLeft`} onSubmit={handleUpdate}>
        <h1 className="title">Update</h1>
        <Input
          name="newBrandBeer"
          label="Brand name"
          placeholder="Type a brand"
          value={newBeer}
          onChange={(e) => setNewBeer(e.target.value)}
        />
        <Input
          name="image"
          type="file"
          label="Beer mage"
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        />
        <div className={styles.showImage}>
          <img src={file} alt={newBeer} />
        </div>
        <Input
          type="number"
          label="Liters of a bottle"
          name="liters"
          value={liters}
          onChange={(e) => setLiters(e.target.value)}
        />

        <Button type="submit">Update</Button>
      </form>
    </section>
  );
};

export default BeerUpdateForm;
