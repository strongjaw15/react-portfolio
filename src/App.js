import React from "react";
import {Header, Navigation, Main, Footer} from './components'
import {HomePage, AboutPage, PortfolioPage, ContactPage, ResumePage, NotFoundPage} from './pages'
import './App.css';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        {window.location.href === 'https://strongjaw15.github.io/react-portfolio/' && (<AboutPage />)}
        {window.location.href === 'https://strongjaw15.github.io/react-portfolio/portfolio' && (<PortfolioPage />)}
        {window.location.href === 'https://strongjaw15.github.io/react-portfolio/contact' && (<ContactPage />)}
        {window.location.href === 'https://strongjaw15.github.io/react-portfolio/resume' && (<ResumePage />)}
      </Main>
      <Footer />
    </>
  );
}

export default App;