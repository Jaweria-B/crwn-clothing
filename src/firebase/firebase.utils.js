import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
getFirestore,
doc,
getDoc,
getDocs,
setDoc,
collection,
writeBatch,
query,
Firestore,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1hfXcnaDGKvzPjNCt5r5CyBuSAmBxWJo",
    authDomain: "crwn-db-a55ba.firebaseapp.com",
    projectId: "crwn-db-a55ba",
    storageBucket: "crwn-db-a55ba.appspot.com",
    messagingSenderId: "432525978456",
    appId: "1:432525978456:web:768498896c84a2dc95d32d",
    measurementId: "G-3G95CRLK83"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const auth = getAuth(app);
auth.languageCode = 'it';

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);