import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './BeerCreateForm.module.css';
import axios from 'axios';

const BeerCreateForm = () => {
  const [newBeer, setNewBeer] = React.useState('');
  const [file, setFile] = React.useState();
  const [liters, setLiters] = React.useState(0);
  const navigate = useNavigate();

  function handleChange({ target }) {
    setNewBeer(target.value);
  }

  function handleChangeImg(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleChangeLiters({ target }) {
    setLiters(target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    axios
      .post(`https://62881afb10e93797c156a03a.mockapi.io/beers`, {
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
    <section className={`${styles.createBeer} container mainContainer`}>
      <form onSubmit={handleSubmitForm} className={`${styles.forms} animeLeft`}>
        <h1 className="title">Create beers</h1>
        <Input
          name="brandBeer"
          label="Brand beer"
          placeholder="Type a Brand"
          onChange={handleChange}
        />
        <Input
          name="image"
          label="Imagem beer"
          type="file"
          onChange={handleChangeImg}
        />
        <Input
          type="number"
          label="Liters of a bottle"
          name="liters"
          onChange={handleChangeLiters}
        />
        <Button type="submit">Create</Button>
      </form>
    </section>
  );
};

export default BeerCreateForm;
