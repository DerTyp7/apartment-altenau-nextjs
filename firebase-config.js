import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDWzRRpiAd9UESS_DwhoiKKcvqPgDowQ28",
	authDomain: "react-apartment-364115.firebaseapp.com",
	projectId: "react-apartment-364115",
	storageBucket: "react-apartment-364115.appspot.com",
	messagingSenderId: "460150243441",
	appId: "1:460150243441:web:2e19e848bbcf710a839bd0",
	measurementId: "G-LVH2RF0ENW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
