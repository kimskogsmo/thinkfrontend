import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCgmCFjCdmv-MrY-gSPfCUA5CntGEbIQ5Q",
    authDomain: "thinkfrontend.firebaseapp.com",
    databaseURL: "https://thinkfrontend-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "thinkfrontend",
    messagingSenderId: "343893954644",
    appId: "1:343893954644:web:dae4bb274f6018c2019dc1",
    measurementId: "G-52LEV0DYV4"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export {
    database
}