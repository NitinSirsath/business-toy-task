
import './App.css'
import ContactPage from './components/ContactPage/ContactPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SolutionPage from './components/SolutionPage/SolutionPage';

function App() {


  return (
    <div className="App">
    <Header />
    <Home />
    <SolutionPage />
    <ContactPage />
    </div>
  )
}

export default App
