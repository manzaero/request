import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCgcR2Sdt8ir9rfaVferDlmf6K4VkIb_Yo",
    authDomain: "todos-project-51be4.firebaseapp.com",
    projectId: "todos-project-51be4",
    storageBucket: "todos-project-51be4.firebasestorage.app",
    messagingSenderId: "443148186996",
    appId: "1:443148186996:web:73cb2b29d4936778d52821",
    databaseURL: "https://todos-project-51be4-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);