import React from 'react';
import NavbarComponent from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
