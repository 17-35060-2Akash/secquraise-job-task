import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCTSpwlRfUtSU4NyDrnsYr-9-SUl79ICD0",
    authDomain: "secquraise-job-task-49805.firebaseapp.com",
    databaseURL: "https://secquraise-job-task-49805-default-rtdb.firebaseio.com",
    projectId: "secquraise-job-task-49805",
    storageBucket: "secquraise-job-task-49805.appspot.com",
    messagingSenderId: "56891447009",
    appId: "1:56891447009:web:fd60590f03030ce74609a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);


