
import './App.css';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Getstarted from './components/GetStarted/Getstarted';
import Header from './components/Header/Header';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Hero from "./components/hero/Hero";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">

        </div>
      <Header />
       <Hero />
      </div>
       <Companies />
       <Residencies />
       <Value />
       <Contact />
       <Getstarted />
       <Footer/>
    </div>
  );
}

export default App;
