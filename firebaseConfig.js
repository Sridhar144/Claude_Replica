import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyBoDlAyJdwqPqFH0fhFz6j15NRslb2VUuU",
  authDomain: "project-b93a3.firebaseapp.com",
  projectId: "project-b93a3",
  storageBucket: "project-b93a3.firebasestorage.app",
  messagingSenderId: "665514280750",
  appId: "1:665514280750:web:d583ab20fb45d633651cbf",
  measurementId: "G-YRGBCE57CY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
