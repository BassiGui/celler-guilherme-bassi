import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const BeerCreateForm = ({ handleSubmit }) => {
  const [newBeer, setNewBeer] = React.useState('');
  const navigate = useNavigate();

  function handleChange({ target }) {
    setNewBeer(target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleSubmit(newBeer);
    navigate('/');
  }
  return (
    <section className="container mainContainer">
      <form onSubmit={handleSubmitForm} className="animeLeft">
        <Input
          name="beer"
          label="Insert a new beer"
          placeholder="Type a new kind of beer"
          onChange={handleChange}
        />
        <Button type="submit">Create</Button>
      </form>
    </section>
  );
};

export default BeerCreateForm;
