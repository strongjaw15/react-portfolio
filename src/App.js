import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header, Navigation, Main, Footer} from './components'
import {HomePage, AboutPage, PortfolioPage, ContactPage, ResumePage, NotFoundPage} from './pages'
import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/resume' element={<ResumePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;