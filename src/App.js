
import './App.css';
import Companies from './components/Companies/Companies';
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
    </div>
  );
}

export default App;
