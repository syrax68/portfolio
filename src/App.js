import './App.scss';
import Header from './layout/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Particule } from './components/Particule/Particule';
import { About } from './components/About/About';


function App() {

  return (
    <Router>
        <Header />
        <Particule />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
                
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
