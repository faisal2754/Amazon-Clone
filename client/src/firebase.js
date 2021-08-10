import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyDwdRvjzbE3e-VIvOAQHRQEBijjre7GCLk',
   authDomain: 'clone-d77b3.firebaseapp.com',
   projectId: 'clone-d77b3',
   storageBucket: 'clone-d77b3.appspot.com',
   messagingSenderId: '467052427563',
   appId: '1:467052427563:web:f43b7cac7bfd5e48792d6e',
   measurementId: 'G-RCYG4CH6HX'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
