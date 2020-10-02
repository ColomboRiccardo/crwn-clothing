import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB-4-fEcWw5JzYwl2Xx6WxLo6bcuuqXlGc',
	authDomain: 'crwn-db-22e0b.firebaseapp.com',
	databaseURL: 'https://crwn-db-22e0b.firebaseio.com',
	projectId: 'crwn-db-22e0b',
	storageBucket: 'crwn-db-22e0b.appspot.com',
	messagingSenderId: '1077321718495',
	appId: '1:1077321718495:web:eb90b0c13626753ac5e76a',
	measurementId: 'G-F0PENYJWN9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
