import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIn-and-signUpPage/signIn-and-signUp.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shop.component';
import { auth } from './firebase/firebase.utils';
import { useEffect, useState, useRef } from 'react';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(
    () => {
       const unsubscribeFromAuth = auth.onAuthStateChanged( user => {
        setCurrentUser(user);
        console.log(user);
      })

      return () => {
        unsubscribeFromAuth();
        console.log("UnMount");
      }
    }
    , []
  );
  return (
    <div>
      <Header currentUser={currentUser}/> 
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