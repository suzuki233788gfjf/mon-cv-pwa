import React,{useRef} from 'react';
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import CVSection from './components/CVSection';
import VideoSection from './components/VideoSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  const cvSectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  // Pas besoin de référence pour la timeline si la navbar ne pointe pas directement dessus

  // Fonction pour faire défiler vers une section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
       <Navbar /> 
       <Header /> 
       <CVSection />
       <VideoSection />
       <TimelineSection />
       <ContactSection /> 
       <Footer />
      {/* Ici viendront vos composants Navbar, Header, etc. */}
      
    </div>
  );
}

export default App;