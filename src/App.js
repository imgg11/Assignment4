import { useState } from 'react';
import './App.css';
import Product from './Product';


function App() {
  let [products,setProducts]=useState([
    {name:"LCD",img:"./products/lcd.jpg"},
    {name:"Mobile",img:"./products/mobile.jpg"},
    {name:"Earphone",img:"./products/earphone.png"},
    {name:"PowerBank",img:"./products/powerbank.jpg"},
    {name:"Bulb",img:"./products/bulb.jpg"},
    {name:"Lamp",img:"./products/lamp.jpg"},
    {name:"Headphones",img:"./products/headphones.jpg"},
    {name:"Mouse",img:"./products/mouse.jpg"},
    {name:"Keyboard",img:"./products/keyboard.jpg"},
    {name:"Notebooks",img:"./products/notebook.jpg"},
  ])
  return (
    <div>
    <h1 className='header'>Products List</h1>
    <Product products={products}/>
    </div>
  );
}

export default App;
