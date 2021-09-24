import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

    const firebaseConfig = {
        apiKey: "AIzaSyBxnGH_hcnXS8jFHXU7J9JVJm6VfcxcovQ",
        authDomain: "rimborsi-carte.firebaseapp.com",
        projectId: "rimborsi-carte",
        storageBucket: "rimborsi-carte.appspot.com",
        messagingSenderId: "360326447536",
        appId: "1:360326447536:web:100570c49aa14dda3f1675"
    };
       
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const fireDb = firebase.firestore()
const storage = firebase.storage()

export { fireDb, storage }
export default firebase