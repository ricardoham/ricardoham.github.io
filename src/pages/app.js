import React from 'react';
import Navbar from '../components/header';
import Profile from './profile';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
      </div>
    )
  }
}

export default App;
