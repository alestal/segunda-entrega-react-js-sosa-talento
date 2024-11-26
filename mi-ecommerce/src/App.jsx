import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/NavBar/Home';
import Contact from './components/NavBar/Contact';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

  

function App() {
    return (
<>
<BrowserRouter>
<NavBar/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route exact path="/products" element={<ItemListContainer />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/product/:id" element={<ProductDetail />} />
<Route path="*" element={<h1>404 - Error no existe la pagina</h1>} />
</Routes>
</BrowserRouter>  
    </>
  )
}


export default App
