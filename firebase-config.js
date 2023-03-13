import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBpj2FZEONb_Qpca4-brCzB0OVJPf3l8hk",
	authDomain: "apartment-f960a.firebaseapp.com",
	projectId: "apartment-f960a",
	storageBucket: "apartment-f960a.appspot.com",
	messagingSenderId: "1007134515151",
	appId: "1:1007134515151:web:9ff0216c618b55a571bcba",
	measurementId: "G-RMSZVM1BCG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
