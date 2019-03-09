import React from 'react';
import Navbar from '../components/navbar';
import Routes from '../routes/routes';
import Header from '../components/header';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App;
