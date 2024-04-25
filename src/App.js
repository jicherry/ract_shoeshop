import { useState } from 'react';
import './App.css';
import { Nav, Container, Navbar } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios';
import Cart from './routes/Cart.js'


function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate(); //페이지 이동 도와줌

  return (
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SHOESHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
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
                  <Card shoes={shoes[i]} i={i} />
                  )
                })
              }

              </div>
            </div>
            <button onClick={()=> { // axios 이용한 get 요청 -> axios.get('url')
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과) => { 
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
            }}>더보기</button>
       </div>
      } />
      
        <Route path='/detail/:id' element={ <Detail shoes={shoes}/> }/> 
        <Route path='/cart' element={ <Cart /> } />
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
