import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIn-and-signUpPage/signIn-and-signUp.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Header/> 
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/signin' element={<SignInAndSignUpPage/>} />
        <Route path='/shop/hats' element={<HatsPage/>} />
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
