import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent } from '@ionic/react';
import React, { useState, useEffect } from "react";
import {getCurrentUser} from '../firebaseConfig';
import './Profile.css';

const Home = () => {

    useEffect(() => {
      getCurrentUser().then(user => {
        if (user) {
          window.location.replace("/discover");
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
        <IonCard>
          <IonCardContent>
            <h2>Have an account?</h2>
            <IonButton routerLink="/login">Login</IonButton>
            <h2>Need an account?</h2>
            <IonButton routerLink="/register">Register</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
