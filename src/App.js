import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header, Navigation, Footer} from './components'
import {HomePage, AboutPage, PortfolioPage, ContactPage, NotFoundPage} from './pages'
import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;