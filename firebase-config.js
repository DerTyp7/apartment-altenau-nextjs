import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.APARTMENT_FIREBASE_API_KEY,
	authDomain: process.env.APARTMENT_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.APARTMENT_FIREBASE_PROJECT_ID,
	storageBucket: process.env.APARTMENT_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.APARTMENT_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.APARTMENT_FIREBASE_APP_ID,
	measurementId: process.env.APARTMENT_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
