import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"
import ContactModal from './components/ContactModal';
import UnderConstruction from './components/UnderConstruction';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0c1935] text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden flex flex-col">
        
        <Navbar onContactClick={handleContactClick} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero onContactClick={handleContactClick} />
                <Services />
                <TechStack />
              </>
            } />
            <Route path="/productos" element={<UnderConstruction />} />
            <Route path="/nosotros" element={<UnderConstruction />} />
          </Routes>
        </main>

        <Footer onContactClick={handleContactClick} />

        <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
        
      </div>
    </Router>
  )
}

export default App