import React from 'react';
import Routes from '../routes/routes';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const App = () => (
  <div>
    <Header>
      <Navbar />
    </Header>
    <Routes />
    <Footer />
  </div>
);

export default App;
