import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BeerCreateForm from './Components/Beer/BeerCreateForm';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  const [beer, setBeer] = React.useState([]);
  console.log(beer);
  function handleAddBeer(beers) {
    const newBeer = [...beer];
    newBeer.push({ id: beers.length, value: beers });
    setBeer(newBeer);
  }

  function handleUpdateBeer({ target }, index) {
    const newBeer = [...beer];
    newBeer.splice(index, 1, { id: index, value: target.value });
    setBeer(newBeer);
  }

  function handleDeleteBeer(index) {
    const newBeer = [...beer];
    newBeer.splice(index, 1);
    setBeer(newBeer);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleUpdateBeer={handleUpdateBeer}
                  handleDeleteBeer={handleDeleteBeer}
                  beers={beer}
                />
              }
            />
            <Route
              path="add-new-beer/*"
              element={<BeerCreateForm handleSubmit={handleAddBeer} />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
