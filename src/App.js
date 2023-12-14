// App.js
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Routing from './Routing';
import Homepage from './pages/Homepage/Homepage';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Routing />
      <ContactForm />
    </div>
  );
}

export default App;
