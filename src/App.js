import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import { Routes, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route index path='/shop/hats' Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
