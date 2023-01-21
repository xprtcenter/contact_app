import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
	apiKey: "AIzaSyB4cqpm175QDpAsFPOvj8yJ2sWyNHJTjEo",
	authDomain: "todoapp-82092.firebaseapp.com",
	databaseURL: "https://todoapp-82092-default-rtdb.firebaseio.com",
	projectId: "todoapp-82092",
	storageBucket: "todoapp-82092.appspot.com",
	messagingSenderId: "200904442635",
	appId: "1:200904442635:web:903717b12941e7fb33580e",
	measurementId: "G-S7JGJH73E5",
};

// Initialize Firebaseyar
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
