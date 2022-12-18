
import './App.css'
import ContactPage from './components/ContactPage/ContactPage';
import CoursePage from './components/CoursePage/CoursePage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LearningPage from './components/LearningPage/LearningPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import SolutionPage from './components/SolutionPage/SolutionPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';

function App() {


  return (
    <div className="App">
    <Header />
    <Home />
    <SolutionPage />
    <ContactPage />
    <CoursePage />
    <TestimonialsPage />
    <LearningPage />
    <QuestionsPage />
    </div>
  )
}

export default App
