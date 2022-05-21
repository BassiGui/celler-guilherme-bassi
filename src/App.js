import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BeerCreateForm from './Components/Beer/BeerCreateForm';
import BeerUpdateForm from './Components/Beer/BeerUpdateForm';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-new-beer/*" element={<BeerCreateForm />} />
            <Route path="update-beer/*" element={<BeerUpdateForm />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
