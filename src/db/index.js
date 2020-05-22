import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2YF46XN_KImUEtoKZNwL4DKrQGDDfFIU",
  authDomain: "figure-management-app.firebaseapp.com",
  databaseURL: "https://figure-management-app.firebaseio.com",
  projectId: "figure-management-app",
  storageBucket: "figure-management-app.appspot.com",
  messagingSenderId: "843432141491",
  appId: "1:843432141491:web:32e8441d53cc227e60c6c6",
  measurementId: "G-CPMQVC508P",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbList = db.collection("list");
