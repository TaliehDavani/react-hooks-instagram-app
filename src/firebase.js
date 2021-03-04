import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjOwbbMWHQxAqDXHvwE-Db_xipbrYa_3c",
    authDomain: "instagram-app-a9530.firebaseapp.com",
    databaseURL: "https://instagram-app-a9530.firebaseio.com",
    projectId: "instagram-app-a9530",
    storageBucket: "instagram-app-a9530.appspot.com",
    messagingSenderId: "187255281162",
    appId: "1:187255281162:web:24a1e4e28e5500748a71f3",
    measurementId: "G-5S66H82G1B"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }


