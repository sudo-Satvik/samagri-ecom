import logo from './logo.svg';
import './App.css';
import Carousel from './customer/components/HeroSection/Carousel';
import Home from './customer/pages/HomePage/Home';
import Coming from './initialPhase/Coming';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Nav/Navigation';
function App() {
  return (
    // <div className="">
    //   <Coming/>
    // </div>
    <>
    <Navigation/>
    <Home/>
    <Footer/>
    </>
    
  );
}

export default App;
