import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import Banner from './components/Banner.jsx'
import Home from './page/Home.jsx';
import Service from "./page/Service.jsx";
import Ludics from './page/Ludics.jsx';
import AndMore from "./page/AndMore.jsx";
import './App.css'



function App() {
let servicioActivo = false;
let ludicsActivo = false;
let andMoreActivo = false;
let logoActivo = false;
let btnServiceActivo = false;



  return (
    
  <>  
    <Home 
        servicioActivo={servicioActivo} 
        ludicsActivo={ludicsActivo} 
        andMoreActivo={andMoreActivo} 
        logoActivo={logoActivo} 
        btnServiceActivo={btnServiceActivo} 
      />

        {/* <AndMore /> */}
        <Service />
        <Ludics />
    
    </>


   
    
    
    
  )
}

export default App
