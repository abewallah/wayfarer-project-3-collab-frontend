import Navbar from './components/Navbar';
import React from 'react';
import routes from './config/routes';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {routes}
      
      <Footer />
    </>
  );
}

export default App;
