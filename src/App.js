import './assets/styles/app.scss';
import React from 'react';
import { Navbar } from './components/navbar';
import {Footer } from './components/footer';
import{HomePage} from './pages/home-page';

const App = ()=>{
  return(
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>     
    </div>
  )
}



export default App;



