import { useState } from 'react';
import './App.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">

      <Routes>
        <Route path='/detail' element={<div>상세페이지</div>}/>
        <Route path='/about' element={<div>어바웃페이지</div>}/>
      </Routes>

       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SHOESHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
       </Navbar>

       <div className='main-bg'></div>

       <div className='container'>
        <div className='row'>
          {
            shoes.map((a , i) => {
              return(
              <Card shoes={shoes[i]} i={i}/>
              )
            })
          }
        </div>
       </div>
    </div>
  );
}

function Card(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width='80%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
