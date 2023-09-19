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

export const auth = getAuth();
auth.languageCode = 'it';

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore(app);