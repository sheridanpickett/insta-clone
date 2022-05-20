import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwYc7uW2ENlwYkBhdei_m2wxfzk3nYOeg",
  authDomain: "instagram-clone-785da.firebaseapp.com",
  projectId: "instagram-clone-785da",
  storageBucket: "instagram-clone-785da.appspot.com",
  messagingSenderId: "193265819610",
  appId: "1:193265819610:web:4e665e76e0c302129aaae3"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;