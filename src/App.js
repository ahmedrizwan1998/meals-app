import './App.css';
import Meals from './components/Meals';
// import Favorites from './components/Favorites';
// import Modal from './components/Modal';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      Meals App
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
