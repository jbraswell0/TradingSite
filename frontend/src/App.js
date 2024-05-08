import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './UI-Components/Header';
import Footer from './UI-Components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
};

export default App