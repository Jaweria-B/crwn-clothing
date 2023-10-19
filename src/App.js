import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIn-and-signUpPage/signIn-and-signUp.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shop.component';
import CheckOut from './components/checkout/checkout.component';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './firebase/firebase.utils';
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  const currentUser = useSelector(selectCurrentUser, {
    equalityFn: shallowEqual,
  });
  const dispatch = useDispatch();
  useEffect( 
    () => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
  
        dispatch(setCurrentUser(user));
      });
  
      return unsubscribe;
    }
    , [dispatch]
  );
  return (
    <div>
      <Header/> 
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route path='/signin'
         element={
          currentUser ? (<Navigate to='/' />) : (<SignInAndSignUpPage/>)
          }  
        />
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/shop/hats' element={<HatsPage/>} />
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </div>
  );
}

export default App;
