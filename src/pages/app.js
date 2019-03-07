import React from 'react';
import Navbar from '../components/header';
import Routes from '../routes/routes';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App;
