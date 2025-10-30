import './App.css'
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/home';
import Shop from './components/shop.jsx'
import Cart from "./components/cart.jsx"

const URL = `https://fakestoreapi.com/products/`

function App() {;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json()
      console.log(data)
      setData(data)
    }

    fetchData(); 
  }, [])

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "shop", element: <Shop data={data} />},
    { path: "cart", element: <Cart data={data} />},
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
