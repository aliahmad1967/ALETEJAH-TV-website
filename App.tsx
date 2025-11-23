import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BreakingNews } from './components/BreakingNews';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Live } from './pages/Live';
import { News } from './pages/News';
import { ProgramDetails } from './pages/ProgramDetails';
import { Programs } from './pages/Programs';
import { Schedule } from './pages/Schedule';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen w-full max-w-full">
          <Header />
          <BreakingNews />
          <main className="flex-grow w-full max-w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/live" element={<Live />} />
              <Route path="/news" element={<News />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:id" element={<ProgramDetails />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;