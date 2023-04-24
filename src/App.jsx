import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import logo from './assets/logo.png'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <img src={logo} alt="Centered Logo" 
        className="centered-logo fixed top-1/2 left-1/2 h-[80vh] w-auto opacity-20 pointer-events-none"
        /> 
        <main>
            <div className="pt-20 bg-logo min-h-screen">
                <Routes>
                <Route index element={<Home />} />
                <Route index path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
