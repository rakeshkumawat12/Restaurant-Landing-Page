import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Favorite from './components/Favorite/Favorite';
import Cakes from './components/Cakes/Cakes';
import Chefs from './components/Chefs/Chefs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Hero/>
      <Cakes id="menu"/>
      <Favorite/>
      <Chefs id="staff"/>
      <Footer/>
    </Router>
  );
}

export default App;