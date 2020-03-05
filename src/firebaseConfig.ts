import * as firebase from 'firebase'
import { toast } from './toast';

const config = {
  apiKey: "AIzaSyB6l9iIi-HsIuXoN8IM-tucZd9PZ9fb-sg",
  authDomain: "bookmark-d-6a071.firebaseapp.com",
  databaseURL: "https://bookmark-d-6a071.firebaseio.com",
  projectId: "bookmark-d-6a071",
  storageBucket: "bookmark-d-6a071.appspot.com",
  messagingSenderId: "397415254420",
  appId: "1:397415254420:web:d5fb105489d193e78a6781",
  measurementId: "G-HYHPHHSD80"
};

firebase.initializeApp(config)

export async function loginUser(email: string, password: string){
    try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log(result)
    return true
    } catch (error) {
        return false
    }
}

export async function registerUser(email: string, password: string){
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(result)
        return true
    } catch (error) {
        toast(error.message, 4000)
        return false
    }
}