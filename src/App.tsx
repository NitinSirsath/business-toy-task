
import './App.css'
import CertificatePage from './components/CertificatePage/CertificatePage';
import ChatPage from './components/ChatPage/ChatPage';
import CoachesPage from './components/CoachesPage/CoachesPage';
import ContactPage from './components/ContactPage/ContactPage';
import CoursePage from './components/CoursePage/CoursePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LearningPage from './components/LearningPage/LearningPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import SolutionPage from './components/SolutionPage/SolutionPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';

function App() {


  return (
    <div className="App">
      {/* <div>
        <ChatPage />
      </div> */}
    <Header />
    <Home />
    <SolutionPage />
    <ContactPage />
    <CoursePage />
    <TestimonialsPage />
    <LearningPage />
    <QuestionsPage />
    <CertificatePage />
    <CoachesPage />
    <Footer />
    </div>
  )
}

export default App
