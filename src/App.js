import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIn-and-signUpPage/signIn-and-signUp.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shop.component';
import { auth, createUserDocumentFromAuth, db } from './firebase/firebase.utils';
import { useEffect, useState, userRef } from 'react';
import { onSnapshot } from 'firebase/firestore';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(
    () => {
       const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if (userAuth) {
          const userRef = await createUserDocumentFromAuth(userAuth);
          // userRef.onSnapshot( SnapShot => {
          //   console.log(SnapShot.data());
          // })
          onSnapshot(userRef, (snapshot) => {
            const setUser = {
              id: snapshot.id,
              ...snapshot.data()
            }            
            setCurrentUser(setUser);
            console.log(currentUser)
          });
        }
        setCurrentUser(userAuth);
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