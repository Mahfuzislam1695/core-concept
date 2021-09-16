import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photography' , price: '$9.99'},
    {name: 'Acrobat' , price: '$14.99'},
    {name: 'Illustrator' , price: '$20.99'},
    {name: 'pre' , price: '$20.99'},
    {name: 'Illustrator' , price: '$20.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
       <ul>
         {
           products.map(product=><li>{product.name}</li>)
         }
         </ul> 
      {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(6);
  const handleIncrease = () => setCount(count + 1) 
  
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },
  [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
      
      {
        users.map(user => <li>{user.name}</li> )
      }
      </ul>
     
    </div>
  )
}

function Product(props)
{
  const productStyle={
    border: '3px solid gray',
    borderRadius: '5px',
    backgroundColor:'black',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: "5px",
  }
  const {name, price} = props.product;
return(
  <div style = {productStyle}>
    <h3>{name} </h3>
    <h5>{price} </h5>
    <button>Buy now</button>
  </div>
)
  
}

export default App;
