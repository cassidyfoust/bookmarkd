import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import React, { useState, useEffect } from "react";
import {getCurrentUser} from '../firebaseConfig';
import './Profile.css';

const Home = () => {

    useEffect(() => {
      getCurrentUser().then(user => {
        if (user) {
          window.history.replaceState({}, "", "/discover");
        }
      });
    }, []);

  const [input, setInput] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Bookmark'd</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Have an account?</h2>
        <IonButton routerLink="/login">Login</IonButton>
        <h2>Need an account?</h2>
        <IonButton routerLink="/register">Register</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
