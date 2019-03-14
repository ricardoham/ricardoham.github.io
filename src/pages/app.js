import React from 'react';
import Navbar from '../components/navbar';
import Routes from '../routes/routes';
import Header from '../components/header';
import Footer from '../components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App;
