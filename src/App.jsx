import './App.css'

import NavBar from './components/navbar'
import HomePage from './components/homepage'
import ShopPage from './components/shoppage';
import CartPage from './components/cartpage';

import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);

  const handlePage = (num, event) => {
    event.preventDefault()
    setPage(num)
  }

  return (
    <>
      <NavBar handlePage={handlePage} />

      {page === 0 && (
        <HomePage />
      )}
      {page === 1 && (
        <ShopPage />
      )}
      {page === 2 && (
        <CartPage />
      )}
      
    </>
  );
}

export default App
