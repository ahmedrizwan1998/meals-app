import './App.css';
import Meals from './components/Meals';
// import Favorites from './components/Favorites';
import Modal from './components/Modal';
import Search from './components/Search';
import {useGlobalContext} from "./context"

function App() {
  const {showModal} = useGlobalContext();
  return (
    <div className="container">
      Meals App
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
