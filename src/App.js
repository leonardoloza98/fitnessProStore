import './App.css';
import NavBar from './Components/Navbar/Navbar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
