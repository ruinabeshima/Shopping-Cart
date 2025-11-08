import './App.css'
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/home';
import Shop from './components/shop.jsx'
import Cart from "./components/cart.jsx"

const URL = `https://fakestoreapi.com/products/`

function App() {;
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = () => {
    setQuantity(quantity + 1);
  }

  const addCart = (item, quantity) => {
    console.log(`${quantity} of ${item.title} was ordered`)
    setCart([...cart, {item, quantity}] )
  }


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
    { path: "/", element: <Home quantity={quantity}/> },
    { path: "shop", element: <Shop data={data} cart={cart} quantity={quantity} handleQuantity={handleQuantity} addCart={addCart}/>},
    { path: "cart", element: <Cart data={data} cart={cart} quantity={quantity} handleQuantity={handleQuantity}/>},
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
