import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/signIn-and-signUpPage/signIn-and-signUp.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shop.component';
import CheckOut from './pages/checkout/checkout.component';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';


function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUserSession());
  // }, [dispatch]);

  useEffect( 
    () => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
  
        dispatch(setCurrentUser(user));
      });

      // addCollectionAndDocuments(
      //   'collections', 
      //   SHOP_DATA.map( 
      //     ({title, items}) => ({title, items})
      //   )
      // );
  
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
         element = {
           currentUser ? (<Navigate to='/' />) : (<SignInAndSignUpPage/>)
          //  currentUser ? 
          //   (console.log('User is here')) 
          //   : 
          //   (<SignInAndSignUpPage/>)
         }
            
        />
        <Route path='/shop/*' element={<ShopPage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </div>
  );
}

export default App;
