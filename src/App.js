import {React, useState} from "react";
import {Header, Navigation, Main, Footer} from './components'
import {AboutPage, PortfolioPage, ContactPage, ResumePage, NotFoundPage} from './pages'

function App() {

  const [fakeLocation, setFakeLocation] = useState('about')

  return (
    <>
      <Header>
        <Navigation fakeLocation={fakeLocation} setFakeLocation={setFakeLocation} />
      </Header>
      <Main>
        {fakeLocation === 'about' && (<AboutPage />)}
        {fakeLocation === 'portfolio' && (<PortfolioPage />)}
        {fakeLocation === 'contact' && (<ContactPage />)}
        {fakeLocation === 'resume' && (<ResumePage />)}
      </Main>
      <Footer />
    </>
  );
}

export default App;