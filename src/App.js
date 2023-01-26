import './App.scss';
import Header from './layout/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Particule } from './components/Particule/Particule';
import { About } from './components/About/About';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import Footer from './layout/footer/Footer';


function App() {

  return (
    <Router>
        <Header />
        <Particule />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />   
            <Route path="/work" element={<Project />} />   
            <Route path="/contact" element={<Contact />} />   
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
