import { useState } from 'react';
import './App.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate(); //페이지 이동 도와줌

  return (
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SHOESHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
       </Navbar>


       <Routes>
        <Route path='/' element={ 
        <div>
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
      } />
      
        <Route path='/detail/:id' element={<Detail shoes={shoes} />}/> 
        <Route path='*' element={<div>없는 페이지</div>} />
      </Routes>

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
