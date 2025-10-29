import './App.css'
import React, { useEffect } from 'react';

import NavBar from './components/navbar';
import Home from './components/home';

const URL = `https://fakestoreapi.com/products`

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json()
      console.log(data)
    }

    fetchData(); 
  }, [])


  return (
    <>
      <NavBar />
      <Home />      
    </>
  );
}

export default App
