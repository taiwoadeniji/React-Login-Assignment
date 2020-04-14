import React from 'react';
import Loginpage from './components/Loginpage';
import ModalForm from './components/ModalForm';
import Menu from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu name= "" />
      <Loginpage />
      <ModalForm />
    </div>
  );
}

export default App;
